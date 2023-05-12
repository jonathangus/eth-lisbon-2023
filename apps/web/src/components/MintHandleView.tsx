import { useState } from 'react';
import { useAccount, useQueryClient } from 'wagmi';
import { useContractWrite } from 'wagmi-lfg';
import {
  AccountProxy__factory,
  MockProfileCreationProxy__factory,
  TBANFT__factory,
} from 'web3-config';

type Props = {};

const MintHandleView = ({}: Props) => {
  const [input, setInput] = useState('');
  const { address } = useAccount();

  const create = useContractWrite(TBANFT__factory, 'mintHandle', {
    reckless: true,
    onSuccess: () => {
      queryClient.invalidateQueries([address]);
    },
  });
  const queryClient = useQueryClient();

  const onCreate = () => {
    console.log({
      to: address,
      handle: input,
      imageURI:
        'https://cdn.stamp.fyi/avatar/eth:0x5389c019595b1f3d166b24392c6e25ca2705befa',
      followModule: '0x0000000000000000000000000000000000000000',
      followModuleInitData: '0x',
      followNFTURI: 'ipfs://QmRQ38pPu99Znd9jjQ1gUeSN6G8w5M2spQA7z2nNSs3rh6',
    });

    const obj = create.write({
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
    setInput('');
  };

  if (create.isLoading) {
    return (
      <div>
        loading....
        {create.writeResult?.data?.hash && (
          <div>
            tx:{' '}
            <a
              href={`https://mumbai.polygonscan.com/tx/${create.writeResult?.data?.hash}`}
            >
              {create.writeResult?.data?.hash}
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <div>handle:</div>
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button onClick={onCreate} disabled={input.length < 6}>
        create handle
      </button>
    </div>
  );
};

export default MintHandleView;
