import { Signer } from '@ethersproject/abstract-signer';
import { Provider } from '@ethersproject/providers';
import { ethers } from 'ethers';
import { QueryObserverResult } from '@tanstack/react-query';

export type _Awaited<T> = T extends Promise<infer R> ? Awaited<R> : T;

export interface ContractFactory<T extends ContractInstance> {
  connect(address: string, signerOrProvider: Signer | Provider): T;
  abi: ethers.ContractInterface;
  name: string;
}

export interface ContractInstance<
  TFunctions extends Record<string, (...args: any[]) => any> = any
> {
  // Note: We use 'callStatic' here because the types are easier to work with
  // than their `functions` counterparts:
  callStatic: TFunctions;
}

export type ContractFunctions<TContract extends ContractInstance> =
  TContract extends ContractInstance<infer TFunctions> ? TFunctions : never;

export type MessageCallback = (data: any) => string;

export type QueryResult<T> = Pick<
  QueryObserverResult<T, Error>,
  | 'error'
  | 'data'
  | 'fetchStatus'
  | 'isError'
  | 'isFetched'
  | 'isFetching'
  | 'isLoading'
  | 'isRefetching'
  | 'isSuccess'
  | 'refetch'
>;

export type TBAToken = {
  id: string;
  handle: string;
  transactionHash: string;
  tokenId: string;
  ownedBy: string;
  accountAddress: string;
  profileId: number;
};

export type LensPost = {
  id: string;
  metadata: {
    name: string;
    description: string;
    content: string;
    image: string;
    animatedUrl?: string;
  };

  profile: {
    id: string;
    name: string;
    bio: string;
    followNftAddress: string;
    metadata: string;
    handle: string;
    ownedBy: string;
    picture: {
      original: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
};
