import { GraphQLClient } from 'graphql-request';

export const graphqlClient = new GraphQLClient(
  'https://api.studio.thegraph.com/query/46756/tba-nft/0.0.8'
);

export const lensGraphqlClient = new GraphQLClient(
  'https://api-mumbai.lens.dev/'
);
