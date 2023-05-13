import { TBAToken } from 'shared-config';
import Link from 'next/link';
import makeBlockie from 'ethereum-blockies-base64';

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
    <div className=" relative   aspect-square   shadow-sm overflow-hidden  ">
      <div className="py">
        <div className="aspect-square   rounded-full overflow-hidden  ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110">
            <defs>
              <radialGradient
                id="gzr"
                gradientTransform="translate(66.4578 24.3575) scale(75.2908)"
                gradientUnits="userSpaceOnUse"
                r="1"
                cx="0"
                cy="0%"
              >
                <stop offset="15.62%" stop-color="hsl(206, 71%, 86%)" />
                <stop offset="39.58%" stop-color="hsl(206, 76%, 75%)" />
                <stop offset="72.92%" stop-color="hsl(251, 82%, 56%)" />
                <stop offset="90.63%" stop-color="hsl(255, 85%, 39%)" />
                <stop offset="100%" stop-color="hsl(255, 85%, 38%)" />
              </radialGradient>
            </defs>
            <g transform="translate(5,5)">
              <path
                d="M100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100C77.6142 100 100 77.6142 100 50Z"
                fill="url(#gzr)"
              />
              <path
                stroke="rgba(0,0,0,0.075)"
                fill="transparent"
                stroke-width="1"
                d="M50,0.5c27.3,0,49.5,22.2,49.5,49.5S77.3,99.5,50,99.5S0.5,77.3,0.5,50S22.7,0.5,50,0.5z"
              />
            </g>
          </svg>
        </div>
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
