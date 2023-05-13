import { useAccount } from 'wagmi';
import { useTokens } from '../hooks/useTokens';
import TokenView from './TokenView';
import MintHandleView from './MintHandleView';
import { useSelectionStore } from '../store/useSelectionStore';
import SelectedView from './SelectedView';
import { useState } from 'react';
import { Button } from '@nextui-org/react';
import CreatePostModal from './CreatePostModal';
import SelectHandle from './SelectHandle';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const UserView = () => {
  const { data: tokens } = useTokens();
  const selectedToken = useSelectionStore((state) => state.selectedToken);
  const [postModalOpen, setPostModalOpen] = useState(false);

  return (
    <div className="p-4">
      <div>
        {/* <Button auto shadow onPress={() => setPostModalOpen(true)}>
          Open modal
        </Button>{' '}
        <CreatePostModal
          open={postModalOpen}
          onClose={() => setPostModalOpen(false)}
        /> */}
        <div className="flex justify-end">
          <MintHandleView />
          <ConnectButton />
        </div>
        <SelectHandle />

        <TokenView tokens={tokens} />
      </div>
    </div>
  );
};

export default UserView;
