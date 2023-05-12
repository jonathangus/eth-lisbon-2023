import { Contract, ethers } from 'ethers';
import { ContractFactory, ContractInstance } from 'shared-config';
import { useNetwork } from 'wagmi';
import { AvailableContractNames, getAddress } from 'web3-config';

export function useAddress<T extends ContractInstance = Contract>(
  contract: ContractFactory<T>,
  chainId?: number
): string | void {
  const { chain: activeChain } = useNetwork();
  const wantedChainId = chainId || activeChain?.id;

  if (!wantedChainId) {
    return;
  }

  let address = getAddress(
    contract.name as any as AvailableContractNames,
    wantedChainId
  );

  if (!address) {
    return;
  }

  try {
    address = ethers.utils.getAddress(address);
    return address;
  } catch (e) {}
}
