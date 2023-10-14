import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ChainSection from './ChainSection';
import TokenSection from './TokenSection';
import DestinationSection from './DestinationSection';
import connectToWallet from '@/lib/connectToWallet';

export default function Bridge() {
  const [originChain, setOriginChain] = useState('Ethereum');
  const [destinationChain, setDestinationChain] = useState('Mantle');
  const [selectedToken, setSelectedToken] = useState('ETH');

  return (
    <Box
      width='100vw'
      height='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{ background: 'linear-gradient(#008080, #ffffff)' }}

      // backgroundColor='#aaeeee'
    >
      <Box
        width='30%'
        padding='1.5vw'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        gap='1vw'
        borderRadius='2vw'
        backgroundColor='#ffffffff'
        borderColor='#904BC0'
      >
        <Typography variant='subtitle2' gutterBottom>
          Transfer your assets in multiple chains
        </Typography>
        {/* Selecting network */}
        <ChainSection
          originChain={originChain}
          setOriginChain={setOriginChain}
          destinationChain={destinationChain}
          setDestinationChain={setDestinationChain}
        />
        {/* Inserting amount */}
        <TokenSection
          originChain={originChain}
          destinationChain={destinationChain}
          selectedToken={selectedToken}
          setSelectedToken={setSelectedToken}
        />
        {/* Inserting destination address */}
        <DestinationSection walletConnection={() => connectToWallet()} />
        <Button fullWidth variant='contained'>
          Bridge
        </Button>
      </Box>
    </Box>
  );
}
