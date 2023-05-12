import { Chain } from 'wagmi';
import { goerli } from 'wagmi/chains';

type Config = {
  isProduction: boolean;
  defaultChains: Chain[];
  fallbackId: number;
};

export const config: Config = {
  isProduction: process.env.NODE_ENV === 'production',
  defaultChains: [goerli],
  fallbackId: goerli.id,
};
