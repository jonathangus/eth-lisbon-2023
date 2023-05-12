/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC6551AccountProxy,
  IERC6551AccountProxyInterface,
} from "../../../../../contracts/erc6551/interfaces/IERC6551Account.sol/IERC6551AccountProxy";

const _abi = [
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IERC6551AccountProxy__factory {
  static readonly abi = _abi;
  static createInterface(): IERC6551AccountProxyInterface {
    return new utils.Interface(_abi) as IERC6551AccountProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC6551AccountProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IERC6551AccountProxy;
  }
}
