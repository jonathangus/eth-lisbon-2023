import request, { gql } from 'graphql-request';
import { useQuery } from 'react-query';
import { TBAToken } from 'shared-config';
import { graphqlClient, lensGraphqlClient } from '../graph-clint';

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

export const useProfileStatsQuery = (profileId?: number) => {
  const query = useQuery<TBAToken[]>(
    ['stats', profileId],
    async () => {
      const data = await lensGraphqlClient.request<any>(graphQuery, {
        profileId: '0x' + Number(profileId).toString(16),
      });

      return data.profile.stats;
    },
    {
      refetchOnWindowFocus: true,
      enabled: Boolean(profileId),
    }
  );

  return query;
};
