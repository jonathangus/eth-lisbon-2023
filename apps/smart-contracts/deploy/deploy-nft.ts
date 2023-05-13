import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { GhoToken__factory } from 'web3-config/typechain';

const name = 'TBANFT';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network, ethers } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;
  const [signer] = await ethers.getSigners();

  const lensHub = '0x60Ae865ee4C725cd04353b5AAb364553f56ceF82';
  const registry = await deployments.get('ERC6551Registry');
  const accountImplementation = await deployments.get('Account');
  const gho = await deployments.get('GhoToken');

  const profileCreationProxyAddress =
    '0x420f0257D43145bb002E69B14FF2Eb9630Fc4736';

  const args: any[] = [
    registry.address,
    accountImplementation.address,
    profileCreationProxyAddress,
    lensHub,
    gho.address,
  ];

  const deployment = await deploy(name, {
    from: deployer,
    args,
  });

  const token = GhoToken__factory.connect(gho.address, signer);
  await token.transfer(deployment.address, ethers.utils.parseEther('1000000'));

  console.log('GHO transfered to contract');
  console.log(
    `npx hardhat verify --network ${network.name} ${deployment.address} ${args
      .map((arg) => `"${arg}"`)
      .join(' ')}`
  );
  deployments.log(`Contract ${name} deployed at ${deployment.address}`);
};

func.tags = [name];
func.dependencies = ['ERC6551Registry', 'Account', 'GhoToken'];

export default func;
