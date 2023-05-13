import { TBAToken } from 'shared-config';
import LensHandle from './LensHandle';

type Props = { token: TBAToken };

const TokenDisplay = ({ token }: Props) => {
  const nodes = [<LensHandle handle={token.handle} />];
  return (
    <div className="aspect-square relative bg-lens flex justify-center items-center">
      <div className="text-[50px]">#{token.tokenId}</div>
      <div className="absolute bottom-2 w-full px-2 ">
        {nodes.map((node) => (
          <div className="w-28">{node}</div>
        ))}
      </div>
    </div>
  );
};

export default TokenDisplay;
