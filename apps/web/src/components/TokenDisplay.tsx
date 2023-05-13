import { TBAToken } from 'shared-config';
import Link from 'next/link';
import GetGradientIcon from './GetGradientIcon';
import { Card, Text } from '@nextui-org/react';

type Props = { token: TBAToken };
const formatAddressToShort = (
  address: string,
  options?: { start?: number; end?: number }
): string =>
  [
    address.slice(0, options?.start || 4),
    '...',
    address.slice(-(options?.end || 4)),
  ].join('');

const TokenDisplay = ({ token }: Props) => {
  return (
    <Card>
      <div className=" relative  sm-shadow  aspect-square     overflow-hidden  ">
        <div className="py">
          <GetGradientIcon rounded={false} tokenId={token.tokenId} />
        </div>

        <div className="center-it absolute text-white text-l text-bold text-center">
          <div className=" 2">{token.handle}.lens</div>

          <div className=" ">
            <div>{formatAddressToShort(token.accountAddress)}</div>
          </div>
        </div>
      </div>

      <Card.Footer
        isBlurred
        css={{
          position: 'absolute',
          bgBlur: '#0f111466',
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Text color="#d1d1d1" size={12}>
          TBA NFT #{token.tokenId}
        </Text>
      </Card.Footer>
    </Card>
  );
};

export default TokenDisplay;
