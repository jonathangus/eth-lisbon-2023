import { TBAToken } from '../../../../packages/shared-config/src';
import TokenItem from './TokenItem';

type Props = { tokens: TBAToken[] };

const TokenView = ({ tokens }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {tokens?.map((token) => (
        <div key={token.handle}>
          <TokenItem token={token} />
        </div>
      ))}
    </div>
  );
};

export default TokenView;
