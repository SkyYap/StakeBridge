import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ChainSection from './ChainSection';
import TokenSection from './TokenSection';
import DestinationSection from './DestinationSection';
import InfoSection from './InfoSection';
import depositToBridge from '@/lib/depositToBridge';

export default function Bridge({ walletAddress }) {
  const [originChain, setOriginChain] = useState('Ethereum');
  const [destinationChain, setDestinationChain] = useState('Mantle');
  const [selectedToken, setSelectedToken] = useState('stETH');
  const [amount, setAmount] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');

  return (
    <Box
      width='30%'
      marginTop='3%'
      padding='1.5vw'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap='1vw'
      borderRadius='2vw'
      backgroundColor='#ffffffff'
    >
      <Typography variant='h6' gutterBottom color={'#008080'}>
        Transfer your assets across multiple chains
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
        destinationAddress={destinationAddress}
        setDestinationAddress={setDestinationAddress}
      />
      <InfoSection selectedToken={selectedToken} />
      <Button
        fullWidth
        disabled={amount <= 0}
        variant='contained'
        onClick={async () => await depositToBridge(amount)}
        sx={{
          borderRadius: '0.5vw',
          backgroundColor: '#00868D',
          '&:hover': {
            backgroundColor: '#008080',
          },
        }}
      >
        {amount > 0 ? 'Transfer' : 'Enter a valid amount to transfer'}
      </Button>
    </Box>
  );
}
