import request, { gql } from 'graphql-request';
import { useQuery } from 'react-query';
import { TBAToken } from 'shared-config';
import axios from 'axios';

const graphQuery = gql`
  query Stats($profileId: ProfileId!) {
    profile(request: { profileId: $profileId }) {
      stats {
        totalFollowers
        totalCollects
        totalPosts
        totalFollowing
      }
    }
  }
`;

export const useNFTsOwnedQuery = (address?: string) => {
  const query = useQuery<any>(
    ['address', address],
    async () => {
      const { data } = await axios.get(
        `https://polygon-mumbai.g.alchemy.com/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}/getNFTs?owner=${address}&withMetadata=true&pageSize=100`
      );

      return data;
    },
    {
      enabled: Boolean(address),
      refetchInterval: 3000,
    }
  );

  return query;
};
