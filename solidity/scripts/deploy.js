const main = async () => {
  const [deployer] = await hre.ethers.getSigners()
  const accountBalance = await deployer.provider.getBalance(deployer.address)
  console.log('Deploying contracts with account: ', deployer.address)
  console.log('Account balance: ', accountBalance.toString())

  let contractFactory = await hre.ethers.getContractFactory('TokenEthTestnet')
  let contract = await contractFactory.deploy(
    // 'TokenEthTestnet',
    // 'ERCT',
    1000000
  )

  await contract.waitForDeployment()

  console.log(
    'contract TokenEthTestnet deployed to address: ', contract.target
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