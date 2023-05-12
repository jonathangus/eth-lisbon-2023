import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const name = 'Account';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  const gaurdian = await deployments.get('AccountGuardian');

  // https://mumbai.polygonscan.com/address/0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789
  const entryPoint = '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789';

  const args: any[] = [gaurdian.address, entryPoint];
  const deployment = await deploy(name, {
    from: deployer,
    args,
  });

  console.log(
    `npx hardhat verify --network ${network.name} ${deployment.address} ${args
      .map((arg) => `"${arg}"`)
      .join(' ')}`
  );

  deployments.log(`Contract ${name} deployed at ${deployment.address}`);
};

func.tags = [name];
func.dependencies = ['AccountGuardian'];
export default func;
