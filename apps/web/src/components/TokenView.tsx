import { TBAToken } from 'shared-config';
import TokenItem from './TokenItem';
import { Text } from '@nextui-org/react';

type Props = { tokens: TBAToken[] };

const TokenView = ({ tokens }: Props) => {
  return (
    <div>
      <Text h2 className=" mt-8 mb-4">
        Created token bound accounts:
      </Text>
      <div className="grid grid-cols-4 gap-4">
        {tokens?.map((token) => (
          <div key={token.handle}>
            <TokenItem token={token} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenView;
