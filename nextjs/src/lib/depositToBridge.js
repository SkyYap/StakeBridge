import { Contract, ethers, formatEther, parseUnits } from 'ethers';

export default async function depositToBridge(amountToDeposit) {
  const contractAddress = '0x3b2FD59dcf8BDBB45e283D2fB98b31Fa20C810E3';

  if (window.ethereum) {
    const abi = [
      'function dummyFunction(uint256 _amount)',
      // 'event DummyFunctionalCalled(address indexed caller, uint256 amount)',
    ];

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new Contract(contractAddress, abi, signer);

    // contract.on(contract.filters.DummyFunctionalCalled, (caller, _amount) => {
    //   const amount = formatEther(_amount, 18);

    //   console.log(`EVENT RECEIVED | ${caller}: ${amount}`);
    // });

    // missing revert data
    const tx = await contract.dummyFunction(
      parseUnits(amountToDeposit.toString(), 18),
    );

    // cannot read property 'dummyFunction' of undefined
    // contract.methods
    //   .dummyFunction(123)
    //   .send({ from: signer.address }, (error, txHash) => {
    //     if (!error) {
    //       console.log('Transaction hash:', txHash);
    //     }
    //   });

    await tx.wait();
  }
}
