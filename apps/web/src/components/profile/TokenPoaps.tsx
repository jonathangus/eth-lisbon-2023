import { TBAToken } from 'shared-config';
import { Text, Avatar } from '@nextui-org/react';
import MockedData from './MockedData';

type Props = { token: TBAToken };

const poaps = [
  {
    name: 'Aave @ Eth Lisbon',
    img: ' https://assets.poap.xyz/aave-40-eth-lisbon-2023-logo-1683715280139.gif?size=small',
  },
  {
    name: 'Aave @ Eth Denver',
    img: ' https://assets.poap.xyz/aave-40-eth-denver-2023-logo-1677530025540.gif',
  },
  {
    name: 'Lens @ Eth Denver',
    img: 'https://assets.poap.xyz/lens-40-eth-denver-2023-logo-1677526196626.gif',
  },
  {
    name: 'ETHGlobal Lisbon | 1inch',
    img: ' https://assets.poap.xyz/10d70a3a-3d91-49c9-a2d6-4b5c32aa4ad5.gif',
  },
  {
    name: 'rAave #2 Lisbon',
    img: ' https://assets.poap.xyz/raave-2-lisbon-2021-logo-1632486977223.png',
  },
];

const TokenPoaps = ({}: Props) => {
  return (
    <div>
      <Text h2>Collected Poaps</Text>
      <MockedData />
      <div className="grid grid-cols-10 gap-6">
        {poaps.map((item) => (
          <div key={item.name} className="flex justify-center flex-col w-full">
            <img src={item.img} className="rounded-full overflow-hidden" />
            <div>
              <Text h5>{item.name}</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TokenPoaps;
