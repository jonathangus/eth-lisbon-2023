import { TBAToken } from '../../../../packages/shared-config/src';
import LensHandle from './LensHandle';

type Props = { token: TBAToken };

const TokenItem = ({ token }: Props) => {
  return (
    <div>
      <LensHandle handle={token.handle} />
      <div>
        <div>{token.accountAddress}</div>
        <div>Owned by: {token.ownedBy}</div>
        <div>Token id: {token.tokenId}</div>
      </div>
    </div>
  );
};

export default TokenItem;
