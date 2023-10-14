import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ChainSection from './ChainSection';
import TokenSection from './TokenSection';
import DestinationSection from './DestinationSection';

export default function Bridge({ walletAddress, setWalletAddress }) {
  const [originChain, setOriginChain] = useState('Ethereum');
  const [destinationChain, setDestinationChain] = useState('Mantle');
  const [selectedToken, setSelectedToken] = useState('ETH');
  const [amount, setAmount] = useState(0);
  const [destinationAddress, setDestinationAddress] = useState('');

  return (
    <Box
      width='100vw'
      height='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{ background: 'linear-gradient(#008080, #ffffff)' }}
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
          amount={amount}
          setAmount={setAmount}
        />
        {/* Inserting destination address */}
        <DestinationSection
          walletAddress={walletAddress}
          setWalletAddress={setWalletAddress}
          destinationAddress={destinationAddress}
          setDestinationAddress={setDestinationAddress}
        />
        <Button
          fullWidth
          disabled={!amount}
          variant='contained'
          sx={{
            backgroundColor: '#008080',
          }}
        >
          {amount ? 'Start bridging' : 'Enter a valid amount to bridge'}
        </Button>
      </Box>
    </Box>
  );
}
