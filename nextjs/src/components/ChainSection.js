import { Box, IconButton } from '@mui/material';
import { SwapHoriz } from '@mui/icons-material';
import ChainSelect from './ChainSelect';

export default function ChainSection({
  originChain,
  setOriginChain,
  destinationChain,
  setDestinationChain,
}) {
  const availableChains = ['Ethereum', 'Mantle', 'Taiko'];

  return (
    <Box width='100%' display='flex' justifyContent='space-around' gap='1vw'>
      <ChainSelect
        label='From'
        chains={availableChains.filter((chain) => chain !== destinationChain)}
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
  );
}
