import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Text } from '@nextui-org/react';

import 'web3-config';
import { useAccount } from 'wagmi';
import { useTokens } from '../hooks/useTokens';
import LensPosts from '../components/LensPosts';
import TokenView from '../components/TokenView';

const Page = () => {
  const { address } = useAccount();
  const tokens = useTokens();

  return (
    <>
      <Text h2 className=" mt-8 mb-4">
        Latest posts
      </Text>

      <LensPosts tokens={tokens.data || []} />
      <TokenView tokens={tokens.data || []} />
    </>
  );
};

export default Page;
