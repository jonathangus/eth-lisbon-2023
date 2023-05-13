import request, { gql } from 'graphql-request';
import { useQuery } from 'react-query';
import { TBAToken } from '../../../../packages/shared-config/src';
import { graphqlClient } from '../graph-clint';

const graphQuery = gql`
  query {
    createds {
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
  const query = useQuery<TBAToken[]>('tokens', async () => {
    const data = await graphqlClient.request<any>(graphQuery);

    return data.createds
      .map((c) => ({
        ...c,
        profileId: Number(c.profileId),
      }))
      .sort((a, b) => Number(a.tokenId) - Number(b.tokenId));
  });

  console.log(query);
  return query;
};
