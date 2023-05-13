import { useContractRead } from 'wagmi-lfg';
import { TBAToken } from '../../../../packages/shared-config/src';
import { useSelectionStore } from '../store/useSelectionStore';
import TokenDisplay from './TokenDisplay';
import { useProfileStatsQuery } from '../hooks/useProfileStatsQuery';
import FollowProfile from './actions/FollowProfile';

type Props = { token: TBAToken };

const TokenItem = ({ token }: Props) => {
  const stats = useProfileStatsQuery(token.profileId);
  return (
    <div className="flex w-full">
      <div className="  w-[400px]">
        <TokenDisplay token={token} />
      </div>
      <div className="flex-1">
        <div>
          <b>{token.accountAddress}</b>
          <div>Token id: {token.tokenId}</div>
          <div>{token.handle}.lens</div>
          {stats.data && (
            <div>
              <div>followers:{stats.data.totalFollowers}</div>
              <div>collects:{stats.data.totalCollects}</div>
              <div>posts:{stats.data.totalPosts}</div>
              <div>totalFollowing: {stats.data.totalFollowing}</div>
            </div>
          )}

          <div>
            <FollowProfile token={token} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenItem;
