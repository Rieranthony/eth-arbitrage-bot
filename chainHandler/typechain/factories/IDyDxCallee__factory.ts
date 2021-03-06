/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { IDyDxCallee, IDyDxCalleeInterface } from "../IDyDxCallee";
import { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "number",
            type: "uint256",
          },
        ],
        internalType: "struct Account.Info",
        name: "accountInfo",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "callFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IDyDxCallee__factory {
  static readonly abi = _abi;
  static createInterface(): IDyDxCalleeInterface {
    return new utils.Interface(_abi) as IDyDxCalleeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDyDxCallee {
    return new Contract(address, _abi, signerOrProvider) as IDyDxCallee;
  }
}
