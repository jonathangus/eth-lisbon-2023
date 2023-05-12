export * from './typechain';
import * as _typechain from './typechain';
import { polygonMumbai } from 'wagmi/chains';
import nftAddress from './deployments/mumbai/TBANFT.json';

export const contracts = {
  TbaNFT: _typechain.TBANFT__factory.name,
};

export type AvailableContractNames = keyof typeof contracts;

type OptionalContracts = '';

export type RequiredContracts = Exclude<
  AvailableContractNames,
  OptionalContracts
>;

type PartialRecord<K extends AvailableContractNames, T> = {
  [P in K]?: T;
};

type AddressRecord = PartialRecord<AvailableContractNames, string>;

export const addresses: Record<number, AddressRecord> = {
  // [localhost.id]: {
  //   [contracts.Counter]: '0x000',
  // },
  [polygonMumbai.id]: {
    [contracts.TbaNFT]: nftAddress.address,
  },
};

export const getAddress = (
  contract: AvailableContractNames,
  chain: number
): string | void => {
  if (!addresses[chain]) {
    console.warn(`missing chain ${chain} in getAddress`);
    return;
  }

  if (!addresses[chain][contract]) {
    console.warn(
      `missing contract ${contract} in chain ${chain} in getAddress`
    );
    return;
  }

  return addresses[chain][contract];
};
