import { Contract, ethers } from 'ethers';

export default async function depositToBridge() {
  const depositAddress = '0x18dE498901316467c8E8379064919B0f8a2B2846';

  if (window.ethereum) {
    const abi = [
      'function decimals() view returns (uint8)',
      'function symbol() view returns (string)',
      'function balanceOf(address a) view returns (uint)',
    ];

    const provider = new ethers.BrowserProvider(window.ethereum);
    // const signer = await provider.getSigner();
    const contract = new Contract('dai.tokens.ethers.eth', abi, provider);

    const decimals = await contract.decimals();
    const balance = await contract.balanceOf('ethers.eth');

    console.log(decimals);
    console.log(balance);
    console.log(ethers.formatUnits(balance, decimals));
  }
}
