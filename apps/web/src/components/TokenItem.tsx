import { useContractRead } from 'wagmi-lfg';
import { TBAToken } from '../../../../packages/shared-config/src';
import { useSelectionStore } from '../store/useSelectionStore';
import TokenDisplay from './TokenDisplay';
import { useProfileStatsQuery } from '../hooks/useProfileStatsQuery';
import FollowProfile from './actions/FollowProfile';
import Link from 'next/link';

type Props = { token: TBAToken };

const TokenItem = ({ token }: Props) => {
  const stats = useProfileStatsQuery(token.profileId);
  return (
    <div className="flex w-full">
      <div className="  w-[400px]">
        <Link href={`/${token.id}`}>
          <TokenDisplay token={token} />
        </Link>
      </div>
    </div>
  );
};

export default TokenItem;
