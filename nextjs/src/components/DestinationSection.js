import { Box, ButtonBase, Icon, InputBase } from '@mui/material';
import connectToWallet from '@/lib/connectToWallet';

export default function DestinationSection({
  walletAddress,
  setWalletAddress,
  destinationAddress,
  setDestinationAddress,
}) {
  return (
    <Box width='100%' display='flex' justifyContent='space-around' gap='1vw'>
      <InputBase
        fullWidth
        variant='filled'
        placeholder='Destination Address'
        value={destinationAddress}
        onChange={(event) => setDestinationAddress(event.target.value)}
        sx={{
          backgroundColor: 'rgb(0, 0, 0, 0.05)',
          borderRadius: '0.5vw',
          paddingLeft: '0.5vw',
        }}
      />
      <ButtonBase
        sx={{
          width: '30%',
          color: '#ff7900',
          backgroundColor: '#4d290d',
          border: 'solid',
          borderRadius: '1vw',
          borderColor: '#ff7900',
          fontSize: '1rem',
          p: 1,
          gap: 1,
        }}
        onClick={async () => {
          if (walletAddress) {
            setDestinationAddress(walletAddress);
          } else {
            setWalletAddress(await connectToWallet());
            setDestinationAddress(walletAddress);
          }
        }}
      >
        {walletAddress ? 'Fill with' : 'Connect'}
        <Icon fontSize='large'>
          <img
            style={{
              display: 'flex',
              width: 'inherit',
              height: 'inherit',
            }}
            src={`/metamask.svg`}
          />
        </Icon>
      </ButtonBase>
    </Box>
  );
}
