import { Loading, Text } from '@nextui-org/react';

import 'web3-config';
import { useAccount } from 'wagmi';
import { useTokens } from '../hooks/useTokens';
import LensPosts from '../components/LensPosts';
import TokenView from '../components/TokenView';

const Page = () => {
  const tokens = useTokens();
  return (
    <>
      {tokens.isLoading && <Loading size="lg" />}
      <TokenView tokens={tokens.data || []} />

      <Text h2 className=" mt-12 mb-8">
        Recent posts from our ERC-6651 NFT
      </Text>

      <LensPosts tokens={tokens.data || []} />
    </>
  );
};

export default Page;
