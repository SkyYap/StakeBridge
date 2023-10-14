import { Box, InputBase } from '@mui/material';
import TokenSelect from './TokenSelect';

export default function TokenSection({
  originChain,
  destinationChain,
  selectedToken,
  setSelectedToken,
  amount,
  setAmount,
}) {
  const originAvailableTokens = ['ETH', 'USDT', 'DAI'];
  const destinationAvailableTokens = ['stbETH', 'stbUSDT', 'stbDAI'];

  return (
    <Box
      width='100%'
      display='flex'
      flexDirection='column'
      justifyContent='space-around'
      gap='1vw'
    >
      <Box
        width='100%'
        display='flex'
        backgroundColor='rgb(0, 0, 0, 0.05)'
        borderRadius='0.5vw'
      >
        <TokenSelect
          isOrigin
          label={'I want to transfer from ' + originChain}
          tokens={originAvailableTokens}
          selectedToken={selectedToken}
          setSelectedToken={setSelectedToken}
        />
        <InputBase
          type='number'
          placeholder='0'
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          inputProps={{
            style: {
              fontSize: '1.25rem',
              textAlign: 'right',
              paddingRight: '0.6vw',
            },
          }}
          sx={{
            '& ::-webkit-outer-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0,
            },
            '& ::-webkit-inner-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0,
            },
          }}
        />
      </Box>
      <TokenSelect
        label={'And receive on ' + destinationChain}
        tokens={destinationAvailableTokens}
        selectedToken={`stb${selectedToken}`}
        setSelectedToken={setSelectedToken}
      />
    </Box>
  );
}
