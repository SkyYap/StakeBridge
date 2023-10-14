import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import WalletIcon from '@mui/icons-material/Wallet';

import { ethers } from 'ethers';

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
      <AppBar position='fixed' sx={{ backgroundColor: '#FFFFFF' }}>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, color: '#2563eB' }}
          >
            Web3Xplorer-CrossChain
          </Typography>
          {walletConnection ? (
            <Typography
              variant='caption'
              sx={{ color: '#2563eB', border: '1px solid', p: 1 }}
            >
              Your Contract Address: {walletConnection}
            </Typography>
          ) : (
            <ButtonBase
              onClick={() => connectToWallet()}
              sx={{
                color: '#ffffff',
                backgroundColor: '#2563eB',
                borderRadius: '1.5rem',
                fontSize: '0.7rem',
                p: 0.6,
              }}
            >
              <WalletIcon fontSize='large' sx={{ mr: 0.5 }} /> Connect Wallet
            </ButtonBase>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
