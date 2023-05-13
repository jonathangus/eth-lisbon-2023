import { TBAToken } from 'shared-config';
import { Text, Avatar } from '@nextui-org/react';

type Props = { token: TBAToken };

const tokens = [
  {
    address: '0x0000000000000000000000000000000000000000',
    name: 'GHO',
  },
  {
    address: '0x0000000000000000000000000000000000000000',
    name: 'GHO',
  },
  {
    address: '0x0000000000000000000000000000000000000000',
    name: 'GHO',
  },
  {
    address: '0x0000000000000000000000000000000000000000',
    name: 'GHO',
  },
  {
    address: '0x0000000000000000000000000000000000000000',
    name: 'GHO',
  },
  {
    address: '0x0000000000000000000000000000000000000000',
    name: 'GHO',
  },
  {
    address: '0x0000000000000000000000000000000000000000',
    name: 'GHO',
  },
];

const TokenERC20 = ({}: Props) => {
  return (
    <div>
      <Text h2>Owned ERC20</Text>
      <div className="grid grid-cols-3 gap-4">
        {tokens.map((item) => (
          <div key={item.name} className="flex items-center">
            <Avatar squared text={item.name} className="mr-2" />
            <div>
              <div>231.21 ${item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenERC20;
