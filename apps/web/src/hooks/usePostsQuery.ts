import request, { gql } from 'graphql-request';
import { useQuery } from 'react-query';
import { LensPost, TBAToken } from 'shared-config';
import { graphqlClient, lensGraphqlClient } from '../graph-clint';

const graphQuery = gql`
  query GetPosts($profileIds: [ProfileId!]) {
    publications(
      request: { profileIds: $profileIds, publicationTypes: [POST], limit: 50 }
    ) {
      items {
        __typename
        ... on Post {
          id
          metadata {
            name
            description
            content
            image
            animatedUrl
          }
          profile {
            id
            name
            bio
            followNftAddress
            metadata
            handle
            ownedBy

            picture {
              ... on NftImage {
                contractAddress
                tokenId
                uri
                verified
              }
              ... on MediaSet {
                original {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const usePostsQuery = (tokens: TBAToken[]) => {
  const profileIds = tokens.map(
    (token) => '0x' + Number(token.profileId).toString(16)
  );

  const query = useQuery<LensPost[]>(
    ['posts', profileIds],
    async () => {
      const data = await lensGraphqlClient.request<any>(graphQuery, {
        profileIds,
      });

      return data.publications.items;
    },
    {
      enabled: Boolean(tokens.length),
      refetchInterval: 2000,
    }
  );

  return query;
};
