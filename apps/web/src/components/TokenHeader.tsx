import { TBAToken } from 'shared-config';
import TokenDisplay from './TokenDisplay';
import FollowProfile from './actions/FollowProfile';
import { useProfileStatsQuery } from '../hooks/useProfileStatsQuery';
import { Link, Text } from '@nextui-org/react';
import { useAddress } from 'wagmi-lfg';
import { TBANFT__factory } from 'web3-config';
import NextLink from 'next/link';

type Props = {
  token: TBAToken;
};

const TokenHeader = ({ token }: Props) => {
  const stats = useProfileStatsQuery(token.profileId);
  const address = useAddress(TBANFT__factory);
  return (
    <div className="py-24 px-12  bg-slate-300">
      <div className="flex">
        <div className=" w-[200px]">
          <TokenDisplay token={token} />
        </div>
        <div className="ml-2">
          <Text className="m-0" h5>
            {token.accountAddress}
          </Text>

          <Text h4 className="text-[#00501e]">
            {token.handle}.lens
          </Text>

          <div>
            <Link
              href={`https://testnets.opensea.io/assets/mumbai/${address}/${token.tokenId}`}
              target="_blank"
            >
              see on opensea
            </Link>
          </div>
        </div>
        <div className="ml-5">
          {stats.data && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Text h4 className="m-0">
                  followers:
                </Text>
                <Text>{stats.data.totalFollowers}</Text>
              </div>
              <div>
                <Text h4 className="m-0">
                  collects:
                </Text>
                <Text>{stats.data.totalCollects}</Text>
              </div>

              <div>
                <Text h4 className="m-0">
                  posts:
                </Text>
                <Text>{stats.data.totalPosts}</Text>
              </div>

              <div>
                <Text h4 className="m-0">
                  totalFollowing:
                </Text>
                <Text>{stats.data.totalFollowing}</Text>
              </div>
            </div>
          )}
        </div>
        <div className="ml-auto">
          <FollowProfile token={token} />
        </div>
      </div>
    </div>
  );
};

export default TokenHeader;
