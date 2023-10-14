import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ChainSelect from './ChainSelect';
import { SwapHoriz } from '@mui/icons-material';

export default function Bridge() {
  const [originChain, setOriginChain] = useState('Ethereum');
  const [destinationChain, setDestinationChain] = useState('Mantle');

  const availableChains = ['Ethereum', 'Mantle', 'Taiko'];

  return (
    <Box
      width='100vw'
      height='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      backgroundColor='#111111'
    >
      <Box
        width='25%'
        height='60%'
        paddingX='1vw'
        display='flex'
        justifyContent='center'
        alignItems='center'
        borderRadius='2vw'
        backgroundColor='#904BC0'
      >
        <Box
          width='100%'
          display='flex'
          justifyContent='space-around'
          gap='1vw'
        >
          <ChainSelect
            label='From'
            chains={availableChains.filter(
              (chain) => chain !== destinationChain,
            )}
            selectedChain={originChain}
            setChain={setOriginChain}
          />
          <IconButton
            onClick={() => {
              setOriginChain(destinationChain);
              setDestinationChain(originChain);
            }}
          >
            <SwapHoriz />
          </IconButton>
          <ChainSelect
            label='To'
            chains={availableChains.filter((chain) => chain !== originChain)}
            selectedChain={destinationChain}
            setChain={setDestinationChain}
          />
        </Box>
      </Box>
    </Box>
  );
}
