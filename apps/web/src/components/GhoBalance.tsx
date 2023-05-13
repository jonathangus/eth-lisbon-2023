import { Avatar, Button, Loading } from '@nextui-org/react';
import { useNotifications } from 'reapop';
import { TBAToken } from 'shared-config';
import { useAccount, useBalance } from 'wagmi';
import { useAddress, useContractWrite } from 'wagmi-lfg';
import {
  Account__factory,
  GhoToken__factory,
  IGhoToken__factory,
  ILensHub__factory,
} from 'web3-config';

type Props = { token: TBAToken };

const GhoBalance = ({ token }: Props) => {
  const gho = useAddress(GhoToken__factory) as `0x${string}`;
  const bal = useBalance({
    token: gho,
    watch: true,
    address: token.accountAddress as any,
  });
  const ghoTokenAddress = useAddress(GhoToken__factory) as string;
  const { address } = useAccount();
  const { notify } = useNotifications();

  const { write, isLoading } = useContractWrite(
    Account__factory,
    'executeCall',
    {
      address: token.accountAddress,
      reckless: true,
      onSuccess: () => {
        notify('$GHO tokens withdrawned to owner account', 'success');
      },
      onError: (e) => {
        console.error(e);
        notify('failed withdrawing $GHO', 'error');
      },
    }
  );

  const withdraw = async () => {
    const data = IGhoToken__factory.createInterface().encodeFunctionData(
      'transfer',
      [address, bal.data.value]
    );

    write({
      args: [ghoTokenAddress, BigInt(0), data],
    });
  };

  return (
    <div className=" flex items-center">
      <div className="flex items-center">
        <Avatar squared text={'$GHO'} className="mr-2" size="xl" />
        <div>
          <div>{bal.data?.formatted}</div>
        </div>
      </div>

      {address?.toLowerCase() === token.ownedBy.toLowerCase() && (
        <div className="ml-4">
          <Button onClick={withdraw} bordered color="primary" auto>
            {!isLoading ? (
              'withdraw'
            ) : (
              <Loading size="xs" color="currentColor" />
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default GhoBalance;
