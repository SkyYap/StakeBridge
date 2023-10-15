import { ethers } from 'ethers';

export default async function connectToWallet() {
  if (window.ethereum) {
    // Check if the window.Ethereum object exists
    // connectivity to web3 app
    const provider = new ethers.BrowserProvider(window.ethereum);

    return provider
      .getSigner()
      .then((signer) => signer.address)
      .catch((error) => console.log(error));
  }
  return undefined;
}
