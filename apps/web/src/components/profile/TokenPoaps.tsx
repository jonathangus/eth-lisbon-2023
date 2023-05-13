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
    name: 'Aave @ Eth Lisbon',
    img: ' https://assets.poap.xyz/aave-40-eth-lisbon-2023-logo-1683715280139.gif?size=small',
  },
  {
    name: 'Aave @ Eth Lisbon',
    img: ' https://assets.poap.xyz/aave-40-eth-lisbon-2023-logo-1683715280139.gif?size=small',
  },
  {
    name: 'Aave @ Eth Lisbon',
    img: ' https://assets.poap.xyz/aave-40-eth-lisbon-2023-logo-1683715280139.gif?size=small',
  },
  {
    name: 'Aave @ Eth Lisbon',
    img: ' https://assets.poap.xyz/aave-40-eth-lisbon-2023-logo-1683715280139.gif?size=small',
  },
  {
    name: 'Aave @ Eth Lisbon',
    img: ' https://assets.poap.xyz/aave-40-eth-lisbon-2023-logo-1683715280139.gif?size=small',
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
