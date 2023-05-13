import { useRouter } from 'next/router';
import TokenHeader from '../components/TokenHeader';
import { useTokens } from '../hooks/useTokens';
import { Loading, Text } from '@nextui-org/react';
import LensPosts from '../components/LensPosts';
import TokenNFTs from '../components/profile/TokenNFTs';
import TokenERC20 from '../components/profile/TokenERC20';
import TokenPoaps from '../components/profile/TokenPoaps';
import CollectedPosts from '../components/profile/CollectedPosts';

const Page = () => {
  const { query } = useRouter();
  const tokensQuery = useTokens();
  if (!query.tokenId) {
    return null;
  }

  const selectedToken = tokensQuery.data?.find(
    (token) => token.tokenId === query.tokenId
  );

  if (tokensQuery.isLoading) {
    return <Loading />;
  }
  if (!selectedToken) {
    return <div>404...</div>;
  }

  return (
    <div>
      <TokenHeader token={selectedToken} />
      <div className="h-12" />
      <Text h2>Posts this token bound account have posted</Text>

      <LensPosts tokens={[selectedToken]} />
      <div className="h-12" />
      <TokenNFTs token={selectedToken} />
      <div className="h-12" />
      <TokenERC20 token={selectedToken} />
      <div className="h-12" />
      <TokenPoaps token={selectedToken} />
      <div className="h-12" />
      <CollectedPosts />
    </div>
  );
};

export default Page;
