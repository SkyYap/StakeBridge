require('dotenv').config()

const main = async () => {
  const [deployer] = await hre.ethers.getSigners()
  const accountBalance = await deployer.provider.getBalance(deployer.address)

  console.log('Deploying contracts with the account: ', deployer.address)
  console.log('Account balance: ', accountBalance.toString())

  let contractFactory = await hre.ethers.getContractFactory('TokenMantleTestnet')
  let contract = await contractFactory.deploy(process.env.BRIDGE_WALLET)
  // let contract = await contractFactory.deploy()

  // const contract = await ethers.deployContract("0xe3dF62Bd6FF1847fe029ef19219976D00BE722E4")

  await contract.waitForDeployment()

  console.log(
    'contract TokenMantleTestnet deployed to address: ', contract.target
  )
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

runMain()
