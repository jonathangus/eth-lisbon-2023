import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const name = 'MockNFT';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  const deployment = await deploy(name, {
    from: deployer,
    args: [
      'https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/',
    ],
  });

  deployments.log(`Contract ${name} deployed at ${deployment.address}`);
};

func.tags = [name];
export default func;
