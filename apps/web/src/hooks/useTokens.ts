import request, { gql } from 'graphql-request';
import { useQuery } from 'react-query';
import { TBAToken } from '../../../../packages/shared-config/src';

const graphQuery = gql`
  query Token($address: Bytes) {
    createds(where: { ownedBy: $address }) {
      id
      handle
      transactionHash
      tokenId
      ownedBy
      accountAddress
    }
  }
`;

export const useTokens = (address: string) => {
  const query = useQuery<TBAToken[]>(address, async () => {
    const data = await request<any>(
      'https://api.studio.thegraph.com/query/46756/tba-nft/0.0.4',
      graphQuery,
      { address }
    );

    return data.createds;
  });

  return query;
};
