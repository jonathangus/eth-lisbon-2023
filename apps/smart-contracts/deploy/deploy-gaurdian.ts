import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const name = 'AccountGuardian';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  const args: any[] = [];
  const deployment = await deploy(name, {
    from: deployer,
    args,
  });

  console.log(
    `npx hardhat verify --network ${network.name} ${
      deployment.address
    } ${args.map((arg) => `"${arg}"`)}`
  );
};

func.tags = [name];
export default func;
