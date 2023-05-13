import { Button, Loading, Input } from '@nextui-org/react';
import { useState } from 'react';
import { useNotifications } from 'reapop';
import { useAccount, useQueryClient } from 'wagmi';
import { useContractWrite } from 'wagmi-lfg';
import { TBANFT__factory } from 'web3-config';
import { useTokens } from '../hooks/useTokens';

const MintHandleView = () => {
  const [input, setInput] = useState('');
  const { address } = useAccount();
  const { notify } = useNotifications();
  const tokensQuery = useTokens();

  const { isLoading, write } = useContractWrite(TBANFT__factory, 'mintHandle', {
    reckless: true,
    onSuccess: () => {
      queryClient.invalidateQueries([address]);
      notify(`${input}.test.lens handle created!`, 'success');
      setInput('');

      setTimeout(() => {
        tokensQuery.refetch();
      }, 3000);
    },
    onError: (e) => {
      console.error(e);
      notify('Failed creadting handle', 'error');
    },
  });
  const queryClient = useQueryClient();

  const onCreate = () => {
    write({
      args: [
        address,
        {
          handle: input,
          imageURI:
            'https://cdn.stamp.fyi/avatar/eth:0x5389c019595b1f3d166b24392c6e25ca2705befa',
          followModule: '0x0000000000000000000000000000000000000000',
          followModuleInitData: '0x',
          followNFTURI: 'ipfs://QmRQ38pPu99Znd9jjQ1gUeSN6G8w5M2spQA7z2nNSs3rh6',
        },
      ],
    });
  };

  if (!address) {
    return <div />;
  }

  return (
    <div className="flex mr-4">
      <Input
        placeholder="wanted handle"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        onClick={onCreate}
        disabled={input.length < 6 || isLoading}
        shadow
        color="primary"
        auto
        className="ml-2"
      >
        {isLoading ? <Loading color="currentColor" size="sm" /> : 'create'}
      </Button>
    </div>
  );
};

export default MintHandleView;
