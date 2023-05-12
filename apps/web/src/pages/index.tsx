import { Counter__factory } from 'web3-config';
import Counter from '../components/Counter';
import { useContractRead } from 'wagmi-lfg';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import 'web3-config';
const Page = () => {
  const { data: currentTimestamp = null } = useContractRead(
    Counter__factory,
    'currentTimestamp'
  );

  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <div>
        <ConnectButton />
      </div>
      <Counter />
      <Counter />
      <Counter />
      {/* {currentTimestamp && <div>Current timestamp: {+currentTimestamp}</div>} */}
    </div>
  );
};

export default Page;
