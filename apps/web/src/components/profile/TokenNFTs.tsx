import { Text } from '@nextui-org/react';
import MockedData from './MockedData';

type Props = {};

const nfts = [
  'https://i.seadn.io/gcs/files/40841cf32061051f2bc1e452e1d73960.png?auto=format&dpr=1&w=1000',

  'https://i.seadn.io/gcs/files/40841cf32061051f2bc1e452e1d73960.png?auto=format&dpr=1&w=1000',
  'https://i.seadn.io/gcs/files/40841cf32061051f2bc1e452e1d73960.png?auto=format&dpr=1&w=1000',
  'https://i.seadn.io/gcs/files/40841cf32061051f2bc1e452e1d73960.png?auto=format&dpr=1&w=1000',
  'https://i.seadn.io/gcs/files/40841cf32061051f2bc1e452e1d73960.png?auto=format&dpr=1&w=1000',
  'https://i.seadn.io/gcs/files/40841cf32061051f2bc1e452e1d73960.png?auto=format&dpr=1&w=1000',
  'https://i.seadn.io/gcs/files/40841cf32061051f2bc1e452e1d73960.png?auto=format&dpr=1&w=1000',
];

const TokenNFTs = ({}: Props) => {
  return (
    <div>
      <Text h2>Owned NFTs</Text>
      <MockedData />
      <div className="grid grid-cols-6 gap-4">
        {nfts.map((nft) => (
          <div>
            <img src={nft} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenNFTs;
