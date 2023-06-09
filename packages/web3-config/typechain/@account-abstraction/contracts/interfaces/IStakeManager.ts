/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export declare namespace IStakeManager {
  export type DepositInfoStruct = {
    deposit: PromiseOrValue<BigNumberish>;
    staked: PromiseOrValue<boolean>;
    stake: PromiseOrValue<BigNumberish>;
    unstakeDelaySec: PromiseOrValue<BigNumberish>;
    withdrawTime: PromiseOrValue<BigNumberish>;
  };

  export type DepositInfoStructOutput = [
    BigNumber,
    boolean,
    BigNumber,
    number,
    number
  ] & {
    deposit: BigNumber;
    staked: boolean;
    stake: BigNumber;
    unstakeDelaySec: number;
    withdrawTime: number;
  };
}

export interface IStakeManagerInterface extends utils.Interface {
  functions: {
    "addStake(uint32)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "depositTo(address)": FunctionFragment;
    "getDepositInfo(address)": FunctionFragment;
    "unlockStake()": FunctionFragment;
    "withdrawStake(address)": FunctionFragment;
    "withdrawTo(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addStake"
      | "addStake(uint32)"
      | "balanceOf"
      | "balanceOf(address)"
      | "depositTo"
      | "depositTo(address)"
      | "getDepositInfo"
      | "getDepositInfo(address)"
      | "unlockStake"
      | "unlockStake()"
      | "withdrawStake"
      | "withdrawStake(address)"
      | "withdrawTo"
      | "withdrawTo(address,uint256)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addStake",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addStake(uint32)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "depositTo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "depositTo(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDepositInfo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDepositInfo(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockStake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unlockStake()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawStake",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawStake(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTo",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTo(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "addStake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addStake(uint32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOf(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "depositTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositTo(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDepositInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDepositInfo(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockStake()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawStake(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdrawTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawTo(address,uint256)",
    data: BytesLike
  ): Result;

  events: {
    "Deposited(address,uint256)": EventFragment;
    "StakeLocked(address,uint256,uint256)": EventFragment;
    "StakeUnlocked(address,uint256)": EventFragment;
    "StakeWithdrawn(address,address,uint256)": EventFragment;
    "Withdrawn(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposited(address,uint256)"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakeLocked"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "StakeLocked(address,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakeUnlocked"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "StakeUnlocked(address,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakeWithdrawn"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "StakeWithdrawn(address,address,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "Withdrawn(address,address,uint256)"
  ): EventFragment;
}

export interface DepositedEventObject {
  account: string;
  totalDeposit: BigNumber;
}
export type DepositedEvent = TypedEvent<
  [string, BigNumber],
  DepositedEventObject
>;

export type DepositedEventFilter = TypedEventFilter<DepositedEvent>;

export interface StakeLockedEventObject {
  account: string;
  totalStaked: BigNumber;
  unstakeDelaySec: BigNumber;
}
export type StakeLockedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  StakeLockedEventObject
>;

export type StakeLockedEventFilter = TypedEventFilter<StakeLockedEvent>;

export interface StakeUnlockedEventObject {
  account: string;
  withdrawTime: BigNumber;
}
export type StakeUnlockedEvent = TypedEvent<
  [string, BigNumber],
  StakeUnlockedEventObject
>;

export type StakeUnlockedEventFilter = TypedEventFilter<StakeUnlockedEvent>;

export interface StakeWithdrawnEventObject {
  account: string;
  withdrawAddress: string;
  amount: BigNumber;
}
export type StakeWithdrawnEvent = TypedEvent<
  [string, string, BigNumber],
  StakeWithdrawnEventObject
>;

export type StakeWithdrawnEventFilter = TypedEventFilter<StakeWithdrawnEvent>;

export interface WithdrawnEventObject {
  account: string;
  withdrawAddress: string;
  amount: BigNumber;
}
export type WithdrawnEvent = TypedEvent<
  [string, string, BigNumber],
  WithdrawnEventObject
>;

export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;

export interface IStakeManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IStakeManagerInterface;

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
    addStake(
      _unstakeDelaySec: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "addStake(uint32)"(
      _unstakeDelaySec: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "balanceOf(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    depositTo(
      account: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "depositTo(address)"(
      account: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getDepositInfo(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [IStakeManager.DepositInfoStructOutput] & {
        info: IStakeManager.DepositInfoStructOutput;
      }
    >;

    "getDepositInfo(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [IStakeManager.DepositInfoStructOutput] & {
        info: IStakeManager.DepositInfoStructOutput;
      }
    >;

    unlockStake(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "unlockStake()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawStake(
      withdrawAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "withdrawStake(address)"(
      withdrawAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawTo(
      withdrawAddress: PromiseOrValue<string>,
      withdrawAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "withdrawTo(address,uint256)"(
      withdrawAddress: PromiseOrValue<string>,
      withdrawAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addStake(
    _unstakeDelaySec: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "addStake(uint32)"(
    _unstakeDelaySec: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "balanceOf(address)"(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  depositTo(
    account: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "depositTo(address)"(
    account: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getDepositInfo(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<IStakeManager.DepositInfoStructOutput>;

  "getDepositInfo(address)"(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<IStakeManager.DepositInfoStructOutput>;

  unlockStake(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "unlockStake()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawStake(
    withdrawAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "withdrawStake(address)"(
    withdrawAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawTo(
    withdrawAddress: PromiseOrValue<string>,
    withdrawAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "withdrawTo(address,uint256)"(
    withdrawAddress: PromiseOrValue<string>,
    withdrawAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addStake(
      _unstakeDelaySec: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "addStake(uint32)"(
      _unstakeDelaySec: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOf(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositTo(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "depositTo(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getDepositInfo(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<IStakeManager.DepositInfoStructOutput>;

    "getDepositInfo(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<IStakeManager.DepositInfoStructOutput>;

    unlockStake(overrides?: CallOverrides): Promise<void>;

    "unlockStake()"(overrides?: CallOverrides): Promise<void>;

    withdrawStake(
      withdrawAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawStake(address)"(
      withdrawAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawTo(
      withdrawAddress: PromiseOrValue<string>,
      withdrawAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawTo(address,uint256)"(
      withdrawAddress: PromiseOrValue<string>,
      withdrawAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Deposited(address,uint256)"(
      account?: PromiseOrValue<string> | null,
      totalDeposit?: null
    ): DepositedEventFilter;
    Deposited(
      account?: PromiseOrValue<string> | null,
      totalDeposit?: null
    ): DepositedEventFilter;

    "StakeLocked(address,uint256,uint256)"(
      account?: PromiseOrValue<string> | null,
      totalStaked?: null,
      unstakeDelaySec?: null
    ): StakeLockedEventFilter;
    StakeLocked(
      account?: PromiseOrValue<string> | null,
      totalStaked?: null,
      unstakeDelaySec?: null
    ): StakeLockedEventFilter;

    "StakeUnlocked(address,uint256)"(
      account?: PromiseOrValue<string> | null,
      withdrawTime?: null
    ): StakeUnlockedEventFilter;
    StakeUnlocked(
      account?: PromiseOrValue<string> | null,
      withdrawTime?: null
    ): StakeUnlockedEventFilter;

    "StakeWithdrawn(address,address,uint256)"(
      account?: PromiseOrValue<string> | null,
      withdrawAddress?: null,
      amount?: null
    ): StakeWithdrawnEventFilter;
    StakeWithdrawn(
      account?: PromiseOrValue<string> | null,
      withdrawAddress?: null,
      amount?: null
    ): StakeWithdrawnEventFilter;

    "Withdrawn(address,address,uint256)"(
      account?: PromiseOrValue<string> | null,
      withdrawAddress?: null,
      amount?: null
    ): WithdrawnEventFilter;
    Withdrawn(
      account?: PromiseOrValue<string> | null,
      withdrawAddress?: null,
      amount?: null
    ): WithdrawnEventFilter;
  };

  estimateGas: {
    addStake(
      _unstakeDelaySec: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "addStake(uint32)"(
      _unstakeDelaySec: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOf(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositTo(
      account: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "depositTo(address)"(
      account: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getDepositInfo(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getDepositInfo(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unlockStake(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "unlockStake()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawStake(
      withdrawAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "withdrawStake(address)"(
      withdrawAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawTo(
      withdrawAddress: PromiseOrValue<string>,
      withdrawAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "withdrawTo(address,uint256)"(
      withdrawAddress: PromiseOrValue<string>,
      withdrawAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addStake(
      _unstakeDelaySec: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "addStake(uint32)"(
      _unstakeDelaySec: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositTo(
      account: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "depositTo(address)"(
      account: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getDepositInfo(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getDepositInfo(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unlockStake(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "unlockStake()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawStake(
      withdrawAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawStake(address)"(
      withdrawAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawTo(
      withdrawAddress: PromiseOrValue<string>,
      withdrawAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawTo(address,uint256)"(
      withdrawAddress: PromiseOrValue<string>,
      withdrawAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
