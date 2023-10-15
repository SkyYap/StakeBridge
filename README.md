# Stake Bridge | ETHKL 2023 Taiko Best dApp Bounty Winner

Your gateway to bridge the gap of staked assets across chains! </br>
Seamlessly transfer your staked tokens to emerging chains like Mantle and Taiko! </br>
The process is as follows: </br>

- the staked tokens are deposited to a designated address on the origin chain.
- this triggers the validator, which makes sure that the funds were received.
- the StakeBridged tokens (sbstETH, sbstMATIC or sbstSOL) will now be sent to the address on the destination chain.

This project was built at ETHKL 2023 Hackathon.

# Tech Stack

- [Solidity](https://soliditylang.org/) | smart contracts
- [Hardhat](https://hardhat.org/) | Ethereum development environment
- [Next.js](https://nextjs.org/) | frontend
- [Material UI](https://mui.com/material-ui/) | styling

# Setup

First make sure Hardhat is installed, you can follow this [tutorial](https://hardhat.org/tutorial)

> Clone this repo

```
git clone https://github.com/SkyYap/Web3-Explorer.git
```

> Install dependencies via npm

```
npm --prefix ./nextjs install

npm --prefix ./solidity install
```

> Compile smart contracts

```
npx --prefix ./solidity hardhat compile --force
```

> Deploy smart contracts

```
npx --prefix ./solidity hardhat run ./scripts/deploy.js --network origin
```

> Create optimized production build

```
npm --prefix ./nextjs build
```

> Start the app

```
npm --prefix ./nextjs start
```

# Contributors

- [Sky](https://github.com/SkyYap)
- [Shawn](https://github.com/shawnteh1711)
- [Wai Kit](https://github.com/1HoWK)
- [Yun Zhe](https://github.com/hooyunzhe)

# References

- [Solidity](https://docs.soliditylang.org/)
- [Hardhat](https://hardhat.org/docs)
- [Next.js](https://nextjs.org/docs)
- [Material UI](https://mui.com/material-ui/getting-started/)
