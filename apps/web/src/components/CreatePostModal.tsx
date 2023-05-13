import React, { useState } from 'react';
import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Textarea,
  Loading,
} from '@nextui-org/react';
import PinataClient from '@pinata/sdk';
import { appName } from '../constant';
import { useSelectionStore } from '../store/useSelectionStore';
import { v4 as uuidv4 } from 'uuid';
import { useAddress, useContractWrite } from 'wagmi-lfg';
import { Account__factory, ILensHub__factory } from 'web3-config';
import { useQueryClient } from 'react-query';
import { useNotifications } from 'reapop';
import { useProfileStatsQuery } from '../hooks/useProfileStatsQuery';

const pinata = new PinataClient({
  pinataJWTKey: process.env.NEXT_PUBLIC_PINATA_JWT,
});

type Props = {
  open: boolean;
  onClose: () => void;
};

const CreatePostModal = ({ open, onClose }: Props) => {
  const selectedToken = useSelectionStore((state) => state.selectedToken);
  const [body, setBody] = useState('');
  const closeHandler = () => {
    onClose();
  };
  const lenshubAddress = useAddress(ILensHub__factory) as string;

  const queryClient = useQueryClient();
  const { notify } = useNotifications();
  const statsQuery = useProfileStatsQuery();

  const [isLoadingIpfs, setIsLoading] = useState(false);

  const { write, isLoading, writeResult } = useContractWrite(
    Account__factory,
    'executeCall',
    {
      address: selectedToken?.accountAddress,
      reckless: true,
      onSuccess: () => {
        queryClient.invalidateQueries(['stats']);
        onClose();
        setTimeout(() => {
          statsQuery.refetch();
        }, 1500);
      },
      onError: (e) => {
        console.error(e);
        notify('Failed posting', 'error');
      },
    }
  );

  const uploadMetadata = async () => {
    setIsLoading(true);
    const data = {
      version: '1.0.0',
      metadata_id: uuidv4(),
      description: `${body}`,
      content: `${body}`,
      name: `Post by @${selectedToken?.handle}`,
      attributes: [
        {
          traitType: 'type',
          value: 'post',
        },
      ],
      media: [],
      appId: appName,
    };
    const res = await pinata.pinJSONToIPFS(data);

    setIsLoading(false);
    return `https://ipfs.io/ipfs/${res.IpfsHash}`;
  };

  const createPost = async () => {
    const ipfs = await uploadMetadata();

    const freeCollectModule = '0x0BE6bD7092ee83D44a6eC1D949626FeE48caB30c';

    const data = ILensHub__factory.createInterface().encodeFunctionData(
      'post',
      [
        {
          profileId: selectedToken.profileId,
          contentURI: ipfs,
          collectModule: freeCollectModule,
          collectModuleInitData:
            '0x0000000000000000000000000000000000000000000000000000000000000000',
          referenceModule: '0x0000000000000000000000000000000000000000',
          referenceModuleInitData: '0x',
        },
      ]
    );

    write({
      args: [lenshubAddress, BigInt(0), data],
    });
  };

  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={open}
        onClose={closeHandler}
      >
        <Modal.Header>create post</Modal.Header>
        <Modal.Body>
          <Textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            label="Content"
            placeholder="Whats on your mind? 🌿🌿"
          />
        </Modal.Body>
        {isLoadingIpfs && (
          <div>
            uploading to ipfs... <Loading color="currentColor" />
          </div>
        )}
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={createPost}>
            {isLoading || isLoadingIpfs ? (
              <Loading size="xs" color="currentColor" />
            ) : (
              'Create'
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreatePostModal;
