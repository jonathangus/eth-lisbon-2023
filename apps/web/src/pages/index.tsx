import { ConnectButton } from '@rainbow-me/rainbowkit';

import 'web3-config';
import { useAccount } from 'wagmi';
import UserView from '../components/UserView';

const Page = () => {
  const { address } = useAccount();

  if (!address) {
    return <ConnectButton />;
  }

  return <UserView />;
};

export default Page;
