import { TBAToken } from '../../../../packages/shared-config/src';
import TokenItem from './TokenItem';

type Props = { tokens: TBAToken[] };

const TokenView = ({ tokens }: Props) => {
  return (
    <div>
      {tokens?.map((token) => (
        <div key={token.handle}>
          <TokenItem token={token} />
        </div>
      ))}
    </div>
  );
};

export default TokenView;
