import { Box } from '@mui/material';
import TokenSelect from './TokenSelect';

export default function TokenSection({
  originChain,
  destinationChain,
  selectedToken,
  setSelectedToken,
}) {
  const availableTokens = ['ETH', 'stbETH'];

  return (
    <Box
      width='100%'
      display='flex'
      flexDirection='column'
      justifyContent='space-around'
      gap='1vw'
    >
      <TokenSelect
        label={'I want to transfer from ' + originChain}
        tokens={availableTokens}
        selectedToken={selectedToken}
        setSelectedToken={setSelectedToken}
      />
      <TokenSelect
        disabled
        label={'And receive on ' + destinationChain}
        tokens={availableTokens}
        selectedToken={selectedToken === 'ETH' ? 'stbETH' : selectedToken}
        setSelectedToken={setSelectedToken}
      />
    </Box>
  );
}
