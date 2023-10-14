import {
  AppBar,
  Box,
  ButtonBase,
  Icon,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { Wallet } from '@mui/icons-material';
import connectToWallet from '@/lib/connectToWallet';

export default function Navbar({ walletAddress, setWalletAddress }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' sx={{ backgroundColor: 'transparent' }}>
        <Toolbar>
          <Box
            display='flex'
            justifyContent='space-between'
            alignContent='center'
            sx={{
              flexGrow: 1,
            }}
          >
            <img
              width={207}
              height={42}
              src='/stakebridge-logo.png'
              alt='stakebridge-logo'
              style={{
                marginTop: '5px',
              }}
            />
            <Tooltip
              title={
                walletAddress && (
                  <Typography variant='caption'>
                    Address: {walletAddress}
                  </Typography>
                )
              }
            >
              <ButtonBase
                onClick={async () => setWalletAddress(await connectToWallet())}
                sx={{
                  color: '#0d1216',
                  backgroundColor: '#FFFFFFF2',
                  borderRadius: '1.5rem',
                  fontSize: '1rem',
                  p: 1,
                  gap: 1,
                }}
              >
                {walletAddress ? (
                  <Icon fontSize='large'>
                    <img
                      style={{
                        display: 'flex',
                        width: 'inherit',
                        height: 'inherit',
                        background: '#4d290d',
                        borderRadius: '3rem',
                      }}
                      src={`/metamask.svg`}
                    />
                  </Icon>
                ) : (
                  <Wallet fontSize='large' />
                )}
                {walletAddress ? 'Connected' : 'Connect Wallet'}
              </ButtonBase>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
