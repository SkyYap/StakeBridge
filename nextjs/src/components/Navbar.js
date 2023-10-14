import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import WalletIcon from '@mui/icons-material/Wallet';

import { ethers } from 'ethers';
import { Icon, Tooltip } from '@mui/material';

export default function ButtonAppBar() {
  const [walletConnection, setWalletConnection] = React.useState();

  const connectToWallet = async () => {
    console.log('Connecting to wallet');
    console.log(walletConnection);

    if (window.ethereum) {
      // Check if the window.Ethereum object exists
      // connectivity to web3 app
      const provider = new ethers.BrowserProvider(window.ethereum);
      const address = await provider.getSigner();
      console.log(address.address);
      setWalletConnection(address.address);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' sx={{ backgroundColor: 'transparent' }}>
        <Toolbar>
          <Typography
            variant='h5'
            component='div'
            sx={{ flexGrow: 1, color: '#FFFFFFF2' }}
          >
            StakeBridge
          </Typography>
          <Tooltip
            title={
              walletConnection && (
                <Typography variant='caption'>
                  Address: {walletConnection}
                </Typography>
              )
            }
          >
            <ButtonBase
              onClick={() => connectToWallet()}
              sx={{
                color: '#0d1216',
                backgroundColor: '#FFFFFFF2',
                borderRadius: '1.5rem',
                fontSize: '1rem',
                p: 1,
                gap: 1,
              }}
            >
              {walletConnection ? (
                <Icon fontSize='large'>
                  <img
                    style={{
                      display: 'flex',
                      width: 'inherit',
                      height: 'inherit',
                      background: '#a9a9a9',
                      borderRadius: '3rem',
                    }}
                    src={`/metamask.svg`}
                  />
                </Icon>
              ) : (
                <WalletIcon fontSize='large' />
              )}
              {walletConnection ? 'Connected' : 'Connect Wallet'}
            </ButtonBase>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
