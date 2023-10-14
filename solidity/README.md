# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
npx hardhat verify --network origin <your_contract_address> <constructor_number>
# for the first address for constructor number is 1000000 as in deploy_origin.js
```

# For front end

# Run the command
`npx hardhat compile --force`
`npx hardhat run ./scripts/deploy.js --network origin`

## Contract address
### From the result copy the deployed contract adddress example.
`0x3b2FD59dcf8BDBB45e283D2fB98b31Fa20C810E3`

## Contract abi
### Copy the contract abi from below path
solidity -> artifacts -> contracts -> TokenEthTestnet.sol -> TokenEthTestnet.json

## Call dummy function in after establish connection with contract using abi and address in front end

```
contract.methods.dummyFunction(123).send({ from: 'YOUR_WALLET_ADDRESS' }, (error, txHash) => {
if (!error) {
console.log('Transaction hash:', txHash);
}
});
```
