import { TBAToken } from 'shared-config';
import TokenDisplay from './TokenDisplay';
import FollowProfile from './actions/FollowProfile';

type Props = {
  token: TBAToken;
};

const TokenHeader = ({ token }: Props) => {
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
        <div>
          <FollowProfile token={token} />
        </div>
      </div>
    </div>
  );
};

export default TokenHeader;
