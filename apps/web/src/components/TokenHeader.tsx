import { TBAToken } from 'shared-config';
import TokenDisplay from './TokenDisplay';
import FollowProfile from './actions/FollowProfile';
import { useProfileStatsQuery } from '../hooks/useProfileStatsQuery';

type Props = {
  token: TBAToken;
};

const TokenHeader = ({ token }: Props) => {
  const stats = useProfileStatsQuery(token.profileId);
  return (
    <div className="p-12 bg-slate-300">
      <div className="flex">
        <div className="w-32">
          <TokenDisplay token={token} />
        </div>
        <div className="ml-2">
          <div>{token.accountAddress}</div>
          <div>{token.handle}.lens</div>
        </div>
        <div className="ml-5">
          {stats.data && (
            <div>
              <div>followers:{stats.data.totalFollowers}</div>
              <div>collects:{stats.data.totalCollects}</div>
              <div>posts:{stats.data.totalPosts}</div>
              <div>totalFollowing: {stats.data.totalFollowing}</div>
            </div>
          )}
        </div>
        <div>
          <FollowProfile token={token} />
        </div>
      </div>
    </div>
  );
};

export default TokenHeader;
