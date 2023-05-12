import { Contract } from '@ethersproject/contracts';
import { ReadContractConfig } from '@wagmi/core';
import {
  _Awaited,
  ContractFactory,
  ContractFunctions,
  ContractInstance,
  MessageCallback,
  QueryResult,
} from 'shared-config';
import { useEffect, useState } from 'react';
import { Address, useContractRead as useContractReadWagmi } from 'wagmi';

import { useAddress } from './useAddress';
import { useNotice } from './useNotice';

export function useContractRead<
  T extends ContractInstance = Contract,
  TFunctionName extends string & keyof ContractFunctions<T> = string
>(
  typechainFactory: ContractFactory<T>,
  method: TFunctionName,
  options?: Omit<
    ReadContractConfig,
    'address' | 'functionName' | 'contractInterface' | 'args' | 'abi'
  > & {
    args?: Parameters<ContractFunctions<T>[TFunctionName]>;
    enabled?: boolean;
    address?: Address;
    onErrorMessage?: string | MessageCallback;
    watch?: boolean;
    chainId?: number;
  }
): QueryResult<_Awaited<ReturnType<ContractFunctions<T>[TFunctionName]>>> {
  const chainId = options?.chainId || undefined;
  const predefinedAddress = useAddress(typechainFactory);
  const args = options?.args || [];
  const address = options?.address || predefinedAddress;
  const enabled = (options?.enabled ?? true) && Boolean(address);
  const watch = options?.watch ?? true;
  //https://github.com/wagmi-dev/wagmi/issues/542#issuecomment-1144178142
  const [isMounted, setIsMounted] = useState(false);
  const notice = useNotice();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const result = useContractReadWagmi({
    ...options,
    address: address as Address,
    functionName: method,
    abi: typechainFactory.abi as any,
    args,
    enabled,
    chainId,
    watch,
    select: (d) => d,
    onError: (err) => {
      if (options?.onErrorMessage && notice) {
        notice({
          status: 'error',
          message:
            typeof options.onErrorMessage === 'string'
              ? options.onErrorMessage
              : options.onErrorMessage(err),
        });
      }
    },
  });

  return {
    ...result,
    // eslint-disable-next-line
    // @ts-ignore
    data: isMounted ? result.data : undefined, //https://github.com/wagmi-dev/wagmi/issues/542#issuecomment-1144178142
  };
}

export default useContractRead;
