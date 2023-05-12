/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AccountGuardian,
  AccountGuardianInterface,
} from "../../../contracts/account/AccountGuardian";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "DefaultImplementationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "executor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "trusted",
        type: "bool",
      },
    ],
    name: "TrustedExecutorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "trusted",
        type: "bool",
      },
    ],
    name: "TrustedImplementationUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultImplementation",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isTrustedExecutor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isTrustedImplementation",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
  {
    inputs: [],
    name: "pendingOwner",
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
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "setDefaultImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "executor",
        type: "address",
      },
      {
        internalType: "bool",
        name: "trusted",
        type: "bool",
      },
    ],
    name: "setTrustedExecutor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "bool",
        name: "trusted",
        type: "bool",
      },
    ],
    name: "setTrustedImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b610139565b600033905090565b600160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556100728161007560201b6105ae1760201c565b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6109f3806101486000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80637c16ffc4116100715780637c16ffc41461013e5780638da5cb5b1461015a5780639472c8c914610178578063b39c459314610194578063e30c3978146101b2578063f2fde38b146101d0576100a9565b80631506fd4d146100ae578063483c088e146100de578063672657ca146100fa578063715018a61461012a57806379ba509714610134575b600080fd5b6100c860048036038101906100c3919061078c565b6101ec565b6040516100d591906107d4565b60405180910390f35b6100f860048036038101906100f3919061081b565b61020c565b005b610114600480360381019061010f919061078c565b6102a8565b60405161012191906107d4565b60405180910390f35b6101326102c8565b005b61013c6102dc565b005b6101586004803603810190610153919061078c565b610369565b005b6101626103ec565b60405161016f919061086a565b60405180910390f35b610192600480360381019061018d919061081b565b610415565b005b61019c6104b1565b6040516101a9919061086a565b60405180910390f35b6101ba6104d7565b6040516101c7919061086a565b60405180910390f35b6101ea60048036038101906101e5919061078c565b610501565b005b60036020528060005260406000206000915054906101000a900460ff1681565b610214610672565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fd83c86b130b16028e237253bca8d22285f6de074a58017e569658653ed5bc36f828260405161029c929190610885565b60405180910390a15050565b60046020528060005260406000206000915054906101000a900460ff1681565b6102d0610672565b6102da60006106f0565b565b60006102e6610721565b90508073ffffffffffffffffffffffffffffffffffffffff166103076104d7565b73ffffffffffffffffffffffffffffffffffffffff161461035d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035490610931565b60405180910390fd5b610366816106f0565b50565b610371610672565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fc97f93134f752a29d53bcdcb295935b3da457bb9a2cfd17ef353ed7e1dc2e088816040516103e1919061086a565b60405180910390a150565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61041d610672565b80600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f373e917f5345a453dc2334dfe07f6cdd8576bda4f79c0e323b3827b419ebaf4082826040516104a5929190610885565b60405180910390a15050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610509610672565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff166105696103ec565b73ffffffffffffffffffffffffffffffffffffffff167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61067a610721565b73ffffffffffffffffffffffffffffffffffffffff166106986103ec565b73ffffffffffffffffffffffffffffffffffffffff16146106ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e59061099d565b60405180910390fd5b565b600160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905561071e816105ae565b50565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107598261072e565b9050919050565b6107698161074e565b811461077457600080fd5b50565b60008135905061078681610760565b92915050565b6000602082840312156107a2576107a1610729565b5b60006107b084828501610777565b91505092915050565b60008115159050919050565b6107ce816107b9565b82525050565b60006020820190506107e960008301846107c5565b92915050565b6107f8816107b9565b811461080357600080fd5b50565b600081359050610815816107ef565b92915050565b6000806040838503121561083257610831610729565b5b600061084085828601610777565b925050602061085185828601610806565b9150509250929050565b6108648161074e565b82525050565b600060208201905061087f600083018461085b565b92915050565b600060408201905061089a600083018561085b565b6108a760208301846107c5565b9392505050565b600082825260208201905092915050565b7f4f776e61626c6532537465703a2063616c6c6572206973206e6f74207468652060008201527f6e6577206f776e65720000000000000000000000000000000000000000000000602082015250565b600061091b6029836108ae565b9150610926826108bf565b604082019050919050565b6000602082019050818103600083015261094a8161090e565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006109876020836108ae565b915061099282610951565b602082019050919050565b600060208201905081810360008301526109b68161097a565b905091905056fea2646970667358221220ce69c6f597362ca7e78cc4b8ac34cf85f51c84b77c8d7f64b6cd855f3f78c8a764736f6c634300080d0033";

type AccountGuardianConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccountGuardianConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AccountGuardian__factory extends ContractFactory {
  constructor(...args: AccountGuardianConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AccountGuardian> {
    return super.deploy(overrides || {}) as Promise<AccountGuardian>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AccountGuardian {
    return super.attach(address) as AccountGuardian;
  }
  override connect(signer: Signer): AccountGuardian__factory {
    return super.connect(signer) as AccountGuardian__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccountGuardianInterface {
    return new utils.Interface(_abi) as AccountGuardianInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccountGuardian {
    return new Contract(address, _abi, signerOrProvider) as AccountGuardian;
  }
}