import { TBAToken } from 'shared-config';
import { usePostsQuery } from '../hooks/usePostsQuery';
import { Loading } from '@nextui-org/react';
import { Card, Grid, Text } from '@nextui-org/react';
import Link from 'next/link';
import FollowProfile from './actions/FollowProfile';
import { useSelectionStore } from '../store/useSelectionStore';
import GetGradientIcon from './GetGradientIcon';

type Props = { tokens: TBAToken[]; withFollow?: boolean };

const LensPosts = ({ tokens, withFollow = true }: Props) => {
  const postsQuery = usePostsQuery(tokens);
  const selectedToken = useSelectionStore((state) => state.selectedToken);

  if (postsQuery.isLoading) {
    return <Loading />;
  }

  const items =
    postsQuery.data?.map((post) => {
      const token = tokens.find(
        (token) =>
          token.accountAddress.toLowerCase() ===
          post.profile.ownedBy.toLowerCase()
      );

      return { ...post, token };
    }) || [];
  return (
    <div className="grid grid-cols-2 gap-4  ">
      {items.map((post) => (
        <Card css={{ p: '$6' }}>
          <Card.Header>
            <div className="w-10 h-10">
              <GetGradientIcon tokenId={post.token?.tokenId} />
            </div>

            <Grid.Container css={{ pl: '$6' }}>
              <Grid xs={12}>
                <Text h4 css={{ lineHeight: '$xs' }} className="flex">
                  {post.profile.handle}.lens
                  <div className="ml-2">{'🌿'}</div>
                </Text>
              </Grid>
              <Grid xs={10}>
                <Text small css={{ color: '$accents8' }}>
                  {post.profile.ownedBy}
                </Text>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Body css={{ py: '$2' }}>
            <Text>{post.metadata.content}</Text>
          </Card.Body>
          <Card.Footer className="flex justify-between">
            <Link href={`/${post.token?.tokenId}`}>
              view token bound account
            </Link>
            {selectedToken && post.token && withFollow && (
              <FollowProfile token={post.token} />
            )}
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

export default LensPosts;
