import { useAccount } from 'wagmi';
import { useTokens } from '../../hooks/useTokens';
import { useState } from 'react';
import { Account__factory, ILensHub__factory } from 'web3-config';
import { useAddress, useContractWrite } from 'wagmi-lfg';
import { useSelectionStore } from '../../store/useSelectionStore';
import { lensClient } from '../../lens-client';
import { useQueryClient } from 'react-query';
import { Button, Loading } from '@nextui-org/react';
import { TBAToken } from 'shared-config';
import { useNotifications } from 'reapop';
import TxDisplay from '../TxDisplay';
import { useProfileStatsQuery } from '../../hooks/useProfileStatsQuery';

type Props = {
  token: TBAToken;
};

const FollowProfile = ({ token }: Props) => {
  const lenshubAddress = useAddress(ILensHub__factory) as string;
  const selectedToken = useSelectionStore((state) => state.selectedToken);
  const queryClient = useQueryClient();
  const { notify } = useNotifications();
  const statsQuery = useProfileStatsQuery();

  const { write, isLoading, writeResult } = useContractWrite(
    Account__factory,
    'executeCall',
    {
      address: selectedToken?.accountAddress,
      reckless: true,
      onSuccess: () => {
        queryClient.invalidateQueries(['stats']);

        setTimeout(() => {
          statsQuery.refetch();
        }, 1500);
      },
      onError: (e) => {
        console.error(e);
        notify('Failed following account', 'error');
      },
    }
  );

  const isSame = token?.id === selectedToken?.id;

  const follow = async () => {
    const data = ILensHub__factory.createInterface().encodeFunctionData(
      'follow',
      [[token.profileId], ['0x']]
    );

    write({
      args: [lenshubAddress, BigInt(0), data],
    });
  };

  return (
    <div className="flex">
      <TxDisplay hash={writeResult?.data?.hash} />
      <Button
        onClick={follow}
        disabled={isSame || !selectedToken}
        shadow
        color="primary"
        auto
        className="ml-2"
      >
        {isLoading ? <Loading color="currentColor" size="sm" /> : 'follow'}
      </Button>
    </div>
  );
};

export default FollowProfile;
