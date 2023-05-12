import { Chain } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';

type Config = {
  isProduction: boolean;
  defaultChains: Chain[];
  fallbackId: number;
};

export const config: Config = {
  isProduction: process.env.NODE_ENV === 'production',
  defaultChains: [polygonMumbai],
  fallbackId: polygonMumbai.id,
};
