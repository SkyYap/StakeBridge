import { ethers } from 'ethers';

export default async function connectToWallet() {
  if (window.ethereum) {
    // Check if the window.Ethereum object exists
    // connectivity to web3 app
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    return signer.address;
  }
  return undefined;
}
