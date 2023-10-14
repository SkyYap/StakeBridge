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

## Contract address

`0x3b2FD59dcf8BDBB45e283D2fB98b31Fa20C810E3`

## Contract abi

solidity -> artifacts -> contracts -> TokenEthTestnet.sol -> TokenEthTestnet.json

## Call dummy function

```
contract.methods.dummyFunction(123).send({ from: 'YOUR_WALLET_ADDRESS' }, (error, txHash) => {
if (!error) {
console.log('Transaction hash:', txHash);
}
});
```
