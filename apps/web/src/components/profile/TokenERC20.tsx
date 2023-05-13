import { TBAToken } from 'shared-config';
import { Text, Avatar } from '@nextui-org/react';
import MockedData from './MockedData';
import GhoBalance from '../GhoBalance';

type Props = { token: TBAToken };

const TokenERC20 = ({ token }: Props) => {
  return (
    <div>
      <Text h2>Owned ERC20</Text>
      <div className="grid grid-cols-3 gap-4">
        <GhoBalance token={token} />
      </div>
    </div>
  );
};

export default TokenERC20;
