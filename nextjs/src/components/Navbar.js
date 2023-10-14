import { useState } from 'react';
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
import depositToBridge from '@/lib/depositToBridge';
import connectToWallet from '@/lib/connectToWallet';

export default function ButtonAppBar() {
  const [walletAddress, setWalletAddress] = useState();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' sx={{ backgroundColor: '#FFFFFF' }}>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, color: '#2563eB' }}
          >
            StakeBridge
          </Typography>
          <ButtonBase
            onClick={depositToBridge}
            sx={{
              color: '#ffffff',
              backgroundColor: '#2563eB',
              borderRadius: '1.5rem',
              fontSize: '1rem',
              p: 1,
              gap: 1,
            }}
          >
            TEST
          </ButtonBase>
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
                color: '#ffffff',
                backgroundColor: '#2563eB',
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
