import { Loading, Text, Link } from '@nextui-org/react';
import MockedData from './MockedData';
import { TBAToken } from 'shared-config';
import { useNFTsOwnedQuery } from '../../hooks/useNFTsOwnedQuery';

type Props = {
  token: TBAToken;
};

const TokenNFTs = ({ token }: Props) => {
  const { isLoading, data } = useNFTsOwnedQuery(token.accountAddress);
  return (
    <div>
      <Text h2>Owned NFTs</Text>
      <div className="grid grid-cols-4 gap-4">
        {data?.ownedNfts?.map((nft) => (
          <div>
            <div>
              <Text h4> {nft.contractMetadata.name}</Text>
              <Text h5>
                {nft.metadata.name || '#' + Number(nft.id.tokenId)}
              </Text>
              <Link
                target="_blank"
                href={`https://testnets.opensea.io/assets/mumbai/${
                  nft.contract.address
                }/${Number(nft.id.tokenId)}`}
              >
                opensea
              </Link>
            </div>
            <img src={nft.media[0].thumbnail} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenNFTs;
