import request, { gql } from 'graphql-request';
import { useQuery } from 'react-query';
import { TBAToken } from '../../../../packages/shared-config/src';
import { useAccount } from 'wagmi';

const graphQuery = gql`
  query Token($address: Bytes) {
    createds(where: { ownedBy: $address }) {
      id
      handle
      transactionHash
      tokenId
      ownedBy
      accountAddress
      profileId
    }
  }
`;

export const useTokens = () => {
  const { address } = useAccount();
  const query = useQuery<TBAToken[]>(address, async () => {
    const data = await request<any>(
      'https://api.studio.thegraph.com/query/46756/tba-nft/0.0.6',
      graphQuery,
      { address }
    );

    return data.createds
      .map((c) => ({
        ...c,
        profileId: Number(c.profileId),
      }))
      .sort((a, b) => Number(a.tokenId) - Number(b.tokenId));
  });

  return query;
};
