/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface IAccountGuardianInterface extends utils.Interface {
  functions: {
    "defaultImplementation()": FunctionFragment;
    "isTrustedExecutor(address)": FunctionFragment;
    "isTrustedImplementation(address)": FunctionFragment;
    "setTrustedExecutor(address,bool)": FunctionFragment;
    "setTrustedImplementation(address,bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "defaultImplementation"
      | "defaultImplementation()"
      | "isTrustedExecutor"
      | "isTrustedExecutor(address)"
      | "isTrustedImplementation"
      | "isTrustedImplementation(address)"
      | "setTrustedExecutor"
      | "setTrustedExecutor(address,bool)"
      | "setTrustedImplementation"
      | "setTrustedImplementation(address,bool)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "defaultImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "defaultImplementation()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedExecutor",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedExecutor(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedImplementation",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedImplementation(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTrustedExecutor",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTrustedExecutor(address,bool)",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTrustedImplementation",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTrustedImplementation(address,bool)",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;

  decodeFunctionResult(
    functionFragment: "defaultImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "defaultImplementation()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedExecutor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedExecutor(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedImplementation(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTrustedExecutor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTrustedExecutor(address,bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTrustedImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTrustedImplementation(address,bool)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IAccountGuardian extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAccountGuardianInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    defaultImplementation(overrides?: CallOverrides): Promise<[string]>;

    "defaultImplementation()"(overrides?: CallOverrides): Promise<[string]>;

    isTrustedExecutor(
      implementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isTrustedExecutor(address)"(
      implementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isTrustedImplementation(
      implementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isTrustedImplementation(address)"(
      implementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setTrustedExecutor(
      executor: PromiseOrValue<string>,
      trusted: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setTrustedExecutor(address,bool)"(
      executor: PromiseOrValue<string>,
      trusted: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTrustedImplementation(
      implementation: PromiseOrValue<string>,
      trusted: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setTrustedImplementation(address,bool)"(
      implementation: PromiseOrValue<string>,
      trusted: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  defaultImplementation(overrides?: CallOverrides): Promise<string>;

  "defaultImplementation()"(overrides?: CallOverrides): Promise<string>;

  isTrustedExecutor(
    implementation: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isTrustedExecutor(address)"(
    implementation: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTrustedImplementation(
    implementation: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isTrustedImplementation(address)"(
    implementation: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setTrustedExecutor(
    executor: PromiseOrValue<string>,
    trusted: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setTrustedExecutor(address,bool)"(
    executor: PromiseOrValue<string>,
    trusted: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTrustedImplementation(
    implementation: PromiseOrValue<string>,
    trusted: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setTrustedImplementation(address,bool)"(
    implementation: PromiseOrValue<string>,
    trusted: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    defaultImplementation(overrides?: CallOverrides): Promise<string>;

    "defaultImplementation()"(overrides?: CallOverrides): Promise<string>;

    isTrustedExecutor(
      implementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isTrustedExecutor(address)"(
      implementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTrustedImplementation(
      implementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isTrustedImplementation(address)"(
      implementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setTrustedExecutor(
      executor: PromiseOrValue<string>,
      trusted: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setTrustedExecutor(address,bool)"(
      executor: PromiseOrValue<string>,
      trusted: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTrustedImplementation(
      implementation: PromiseOrValue<string>,
      trusted: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setTrustedImplementation(address,bool)"(
      implementation: PromiseOrValue<string>,
      trusted: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    defaultImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    "defaultImplementation()"(overrides?: CallOverrides): Promise<BigNumber>;

    isTrustedExecutor(
      implementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isTrustedExecutor(address)"(
      implementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTrustedImplementation(
      implementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isTrustedImplementation(address)"(
      implementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setTrustedExecutor(
      executor: PromiseOrValue<string>,
      trusted: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setTrustedExecutor(address,bool)"(
      executor: PromiseOrValue<string>,
      trusted: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTrustedImplementation(
      implementation: PromiseOrValue<string>,
      trusted: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setTrustedImplementation(address,bool)"(
      implementation: PromiseOrValue<string>,
      trusted: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    defaultImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "defaultImplementation()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTrustedExecutor(
      implementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isTrustedExecutor(address)"(
      implementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTrustedImplementation(
      implementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isTrustedImplementation(address)"(
      implementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setTrustedExecutor(
      executor: PromiseOrValue<string>,
      trusted: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setTrustedExecutor(address,bool)"(
      executor: PromiseOrValue<string>,
      trusted: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTrustedImplementation(
      implementation: PromiseOrValue<string>,
      trusted: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setTrustedImplementation(address,bool)"(
      implementation: PromiseOrValue<string>,
      trusted: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
