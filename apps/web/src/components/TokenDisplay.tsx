import { TBAToken } from 'shared-config';
import Link from 'next/link';
import GetGradientIcon from './GetGradientIcon';

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
    <div className=" relative   aspect-square     overflow-hidden  ">
      <div className="py">
        <GetGradientIcon tokenId={token.tokenId} />
      </div>

      <div className="center-it absolute text-white text-l text-bold text-center">
        <div className=" 2">{token.handle}.lens</div>

        <div className=" ">
          <div>{formatAddressToShort(token.accountAddress)}</div>
        </div>
      </div>
    </div>
  );
};

export default TokenDisplay;
