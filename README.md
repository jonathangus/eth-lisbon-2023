# TBA 🤝 Lens - ETH Lisbon 2023

## How it was built

Built smart contracts using Hardhat and deployed them on the Polygon network. Specifically, implemented ERC-6551 (https://eips.ethereum.org/EIPS/eip-6551) along with ERC-4337 from the popular account-abstraction package. To make communication with the contracts easier and more efficient, we added a subgraph from The Graph platform using CLI.

For the frontend, we used Next.js and hosted on Vercel and styled it with the @nextui-org/react library and Tailwind. Web3 read/write was used with wagm. Used the Lens SDK and Lens subgraph to fetch information from Lens.


## Description

This project explores the possibilities of a NFT having its own smart account that it controls using ERC-6551. The ability to collect erc20 and erc721 tokens and execute transactions as a NFT is pretty impressive. In this project, I built on top of Lens to make a user's identity transferable and not locked to one private key.

With my project, a Lens handle that collects posts, mirrors, earns revenue, and collects followers is bound to a NFT that can be transferred. Some use cases include:

- If a private key is leaked and I don't want to be impersonated, I can move what I have built up to a secure wallet.
- If I minted my handle on my hot wallet and want to move it to a cold wallet or multisig wallet.
- If a company's marketing person leaves the company and the company handle was created with their private key.
- If I am a tech blogger and have built a following and want to sell it.

The token-bound accounts are ERC-4337, so they support features like bundling transactions and having paymasters. I started on a custom paymaster that would sponsor transactions with an ERC20 token, but I was unable to finish it in time. A project can dedicate a budget for each holder to do an action like staking or listing. In my example, I wanted each token-bound account to receive $GHO tokens during mint, which would pay for the Lens actions that a holder could do.



## Boilerplate

### Core packages
- `ethers`
- `wagmi`
- `hardhat`
- `next.js`
- `typechain`

### Features?
- built on top of wagmi (❤️) with recognisable api
- write and read hooks are typesafe
- sync deployments to frontend so you dont manually have to update addresses
- no theming or css 


### Apps and Packages
- `web`: another [Next.js](https://nextjs.org) app
- `smart-contracts`: smart contracts with hardhat
- `web3-config`: deployments, generated types from contract and common web3 config
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup
Install dependencies by running `yarn`

### Development
To run local development run:
```
yarn dev
```

### Build

To build all apps and packages, run the following command:

```
yarn build
```
