import { useState } from 'react';
import { Box } from '@mui/material';
import Bridge from '@/components/Bridge';
import Navbar from '@/components/Navbar';
import Connect from '@/components/Connect';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState();

  return (
    <Box
      width='100vw'
      height='100vh'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      sx={{ background: 'linear-gradient(#008080, #ffffff)' }}
    >
      {!walletAddress && (
        <img src='/stakebridge-logo.png' alt='stakebridge-logo' />
      )}
      {!walletAddress && <Connect setWalletAddress={setWalletAddress} />}
      {walletAddress && <Navbar walletAddress={walletAddress} />}
      {walletAddress && <Bridge walletAddress={walletAddress} />}
    </Box>
  );
}
