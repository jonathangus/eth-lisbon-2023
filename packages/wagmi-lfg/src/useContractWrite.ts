import { Contract } from '@ethersproject/contracts';
import {
  Address,
  SendTransactionResult,
  WaitForTransactionArgs,
  WriteContractResult,
} from '@wagmi/core';
import {
  ContractFactory,
  ContractFunctions,
  ContractInstance,
  MessageCallback,
} from 'shared-config';
import { ethers } from 'ethers';
import {
  useContractWrite as useContractWriteWagmi,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useWaitForTransaction,
} from 'wagmi';

import { useAddress } from './useAddress';
import { useNotice } from './useNotice';

export function useContractWrite<
  T extends ContractInstance = Contract,
  TFunctionName extends string & keyof ContractFunctions<T> = string
>(
  typechainFactory: ContractFactory<T>,
  method: TFunctionName,
  options?: {
    args?: Parameters<ContractFunctions<T>[TFunctionName]>;
    enabled?: boolean;
    address?: string;
    reckless?: boolean;
    usePrepareContractWriteOptions?: UsePrepareContractWriteConfig;
    useContractWriteOptions?: UseContractWriteConfig;
    useWaitForTransactionOptions?: WaitForTransactionArgs;
    onSuccess?: (result: ethers.providers.TransactionReceipt) => void;
    onError?: (error: Error) => void;
    onErrorMessage?: string | MessageCallback;
    onSuccessMessage?: string | MessageCallback;
  }
): {
  disabled: boolean;
  isLoading: boolean;
  waitForTxResult: ReturnType<typeof useWaitForTransaction>;
  writeResult: ReturnType<typeof useContractWriteWagmi>;
  write: (config?: {
    args?: Parameters<ContractFunctions<T>[TFunctionName]>;
    overrides?: ethers.CallOverrides;
  }) => Promise<void | SendTransactionResult>;
} {
  const notice = useNotice();
  const predefinedAddress = useAddress(typechainFactory);
  const args = options?.args || [];
  const address = options?.address || predefinedAddress;
  const enabled = (options?.enabled ?? true) && Boolean(address);
  const usePrepareContractWriteOptions =
    options?.usePrepareContractWriteOptions || {};

  const _onError = (err: Error) => {
    if (options?.onError && err) {
      options.onError(err);
    }

    if (options?.onErrorMessage && notice) {
      notice({
        status: 'error',
        message:
          typeof options.onErrorMessage === 'string'
            ? options.onErrorMessage
            : options.onErrorMessage(err),
      });
    }
  };

  const { config } = usePrepareContractWrite({
    ...usePrepareContractWriteOptions,
    address: address as Address,
    abi: typechainFactory.abi as any,
    functionName: method,
    args: args || [],
    enabled,
  });

  const useContractWriteOptions = options?.useContractWriteOptions || {};

  let finalOptions: UseContractWriteConfig = {
    ...useContractWriteOptions,
    ...config,
    request: undefined,
    onError: _onError,
    chainId: 5,
  };

  if (options?.reckless) {
    finalOptions = {
      ...finalOptions,
      mode: 'recklesslyUnprepared',
    };
  } else {
    finalOptions = {
      ...finalOptions,
      request: undefined,
      functionName: undefined,
      mode: 'prepared',
    };
  }

  const writeResult = useContractWriteWagmi(finalOptions);

  const useWaitForTransactionOptions =
    options?.useWaitForTransactionOptions || {};

  const waitForTxResult = useWaitForTransaction({
    hash: writeResult?.data?.hash,
    onError: _onError,
    onSuccess: (data) => {
      if (options?.onSuccess && data) {
        options.onSuccess(data);
      }

      if (notice && options?.onSuccessMessage) {
        notice({
          status: 'success',
          message:
            typeof options?.onSuccessMessage === 'string'
              ? options?.onSuccessMessage
              : options?.onSuccessMessage(data),
        });
      }
    },
    ...useWaitForTransactionOptions,
  });

  const _write = async (config?: {
    args?: Parameters<ContractFunctions<T>[TFunctionName]>;
    overrides?: ethers.CallOverrides;
  }): Promise<void | SendTransactionResult> => {
    if (!writeResult.write) {
      return;
    }

    const args = config?.args || [];
    const writeOptions: {
      recklesslySetUnpreparedArgs?: unknown[];
      recklesslySetUnpreparedOverrides?: any;
    } = {};

    if (args.length > 0) {
      writeOptions.recklesslySetUnpreparedArgs = args;
    }
    if (config?.overrides) {
      writeOptions.recklesslySetUnpreparedOverrides = config.overrides;
    }

    if (writeResult.writeAsync) {
      return writeResult.writeAsync(writeOptions);
    }
  };

  const disabled = Boolean(!writeResult.write || !enabled || !address);

  return {
    waitForTxResult,
    writeResult,
    write: _write,
    isLoading: Boolean(waitForTxResult?.isLoading || writeResult?.isLoading),
    disabled,
  };
}

export default useContractWrite;
