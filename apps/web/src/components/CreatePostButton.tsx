import { useState } from 'react';
import CreatePostModal from './CreatePostModal';
import { Button } from '@nextui-org/react';
import { useSelectionStore } from '../store/useSelectionStore';

const CreatePostButton = () => {
  const [postModalOpen, setPostModalOpen] = useState(false);
  const selectedToken = useSelectionStore((state) => state.selectedToken);

  if (!selectedToken) {
    return null;
  }

  return (
    <div>
      <Button
        className="mr-2"
        auto
        shadow
        onPress={() => setPostModalOpen(true)}
      >
        create post
      </Button>{' '}
      <CreatePostModal
        open={postModalOpen}
        onClose={() => setPostModalOpen(false)}
      />
    </div>
  );
};

export default CreatePostButton;
