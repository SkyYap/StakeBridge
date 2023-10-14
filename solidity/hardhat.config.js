require("@nomicfoundation/hardhat-toolbox")
//load env file
require("dotenv").config()

module.exports = {
  solidity: '0.8.20',
  paths: {
    sources: './contracts',
    artifacts: './artifacts',
    tests: './test',
  },
  etherscan: {
    apiKey: "G5V97I1T37HJIMIT9THBQ28TYEDRWF8V4A",
  },
  networks: {
    origin: {
      url: "https://goerli.infura.io/v3/5647697f8a11438c9a6f6bdf0e942aa4",
      accounts: [process.env.DEPLOY_ACC_KEY],
    },
    "mantle-testnet": {
      url: "https://rpc.testnet.mantle.xyz/",
      // url: "https://goerli.infura.io/v3/5647697f8a11438c9a6f6bdf0e942aa4",
      accounts: [process.env.DEPLOY_ACC_KEY],
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/5647697f8a11438c9a6f6bdf0e942aa4",
      account: [process.env.DEPLOY_ACC_KEY],
    },
    taiko: {
      url: "https://rpc.jolnir.taiko.xyz",
      account: [process.env.DEPLOY_ACC_KEY],
   },
  },
}
