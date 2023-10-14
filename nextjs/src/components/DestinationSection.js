import { useState } from 'react';
import { Box, ButtonBase, Icon, TextField } from '@mui/material';
import connectToWallet from '@/lib/connectToWallet';

export default function DestinationSection({ walletConnection }) {
  const [address, setAddress] = useState();

  return (
    <Box width='100%' display='flex' justifyContent='space-around' gap='1vw'>
      {/* <TextField variant='outlined' label={address} /> */}
      <ButtonBase
        // onClick={() => connectToWallet()}
        sx={{
          color: '#ffffff',
          backgroundColor: '#010101',
          border: 'solid',
          borderRadius: '1.5rem',
          borderColor: '#ff7900',
          fontSize: '1rem',
          p: 1,
          gap: 1,
        }}
      >
        Fill with{' '}
        {walletConnection ? (
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
          'wallet'
        )}
      </ButtonBase>
    </Box>
  );
}
