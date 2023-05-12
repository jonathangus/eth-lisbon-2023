import { useAccount } from 'wagmi';
import { useTokens } from '../hooks/useTokens';
import TokenView from './TokenView';
import MintHandleView from './MintHandleView';

const UserView = () => {
  const { address } = useAccount();
  const { data: tokens } = useTokens(address);

  return (
    <div>
      <MintHandleView />
      <TokenView tokens={tokens} />;
    </div>
  );
};

export default UserView;
