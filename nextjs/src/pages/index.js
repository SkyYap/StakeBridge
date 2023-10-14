import { useState } from 'react';
import Bridge from '@/components/Bridge';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState();

  return (
    <div>
      <Navbar
        walletAddress={walletAddress}
        setWalletAddress={setWalletAddress}
      />
      <Bridge
        walletAddress={walletAddress}
        setWalletAddress={setWalletAddress}
      />
    </div>
  );
}
