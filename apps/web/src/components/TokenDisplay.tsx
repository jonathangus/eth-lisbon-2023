import { TBAToken } from 'shared-config';
import Link from 'next/link';

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
    <div className="aspect-square relative bg-lens flex justify-center items-center">
      <Link href={`/${token.tokenId}`} className="text-white">
        <div className="text-[50px]">#{token.tokenId}</div>

        <div>
          <div>{token.handle}</div>
          <div>{formatAddressToShort(token.accountAddress)}</div>
        </div>
      </Link>
    </div>
  );
};

export default TokenDisplay;
