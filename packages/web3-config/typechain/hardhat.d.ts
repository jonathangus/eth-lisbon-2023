/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "GhoToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GhoToken__factory>;
    getContractFactory(
      name: "IERC20Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Burnable__factory>;
    getContractFactory(
      name: "IERC20Mintable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Mintable__factory>;
    getContractFactory(
      name: "IGhoToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGhoToken__factory>;
    getContractFactory(
      name: "ERC6551Registry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC6551Registry__factory>;
    getContractFactory(
      name: "IERC6551Account",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC6551Account__factory>;
    getContractFactory(
      name: "IERC6551AccountProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC6551AccountProxy__factory>;
    getContractFactory(
      name: "IERC6551Registry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC6551Registry__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "GhoToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GhoToken>;
    getContractAt(
      name: "IERC20Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Burnable>;
    getContractAt(
      name: "IERC20Mintable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Mintable>;
    getContractAt(
      name: "IGhoToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGhoToken>;
    getContractAt(
      name: "ERC6551Registry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC6551Registry>;
    getContractAt(
      name: "IERC6551Account",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC6551Account>;
    getContractAt(
      name: "IERC6551AccountProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC6551AccountProxy>;
    getContractAt(
      name: "IERC6551Registry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC6551Registry>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
