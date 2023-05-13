export * from './typechain';
import * as _typechain from './typechain';
import { polygonMumbai } from 'wagmi/chains';
import nftAddress from './deployments/mumbai/TBANFT.json';
import ghoAddress from './deployments/mumbai/GhoToken.json';

export const contracts = {
  TbaNFT: _typechain.TBANFT__factory.name,
  LensHub: _typechain.ILensHub__factory.name,
  GHO: _typechain.GhoToken__factory.name,
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
    [contracts.LensHub]: '0x60Ae865ee4C725cd04353b5AAb364553f56ceF82',
    [contracts.GHO]: ghoAddress.address,
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
