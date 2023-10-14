import { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ChainSelect from './ChainSelect';
import { SwapHoriz } from '@mui/icons-material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import TextField from '@mui/material/TextField';

import { Icon, Tooltip } from '@mui/material';

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
        padding='1.5vw'
        display='flex'
        justifyContent='center'
        alignItems='center'
        borderRadius='2vw'
        backgroundColor='#904BC0'
      >
        <Stack spacing={2}>
          <Typography variant='subtitle2' gutterBottom>
            Transfer your assets in multiple chains
          </Typography>
          {/* Selecting network */}
          <Box
            width='100%'
            display='flex'
            justifyContent='space-around'
            gap='1vw'
            sx={{ border: '1px solid' }}
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
          {/* Inserting amount */}
          <Box
            width='100%'
            display='block'
            justifyContent='space-around'
            gap='1vw'
            sx={{ border: '1px solid' }}
          >
            <ChainSelect
              label={'I want to transfer from ' + originChain}
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
          {/* Inserting destination address */}
          <Box
            width='100%'
            display='flex'
            justifyContent='space-around'
            gap='1vw'
            sx={{ border: '1px solid' }}
          >
            {/* <TextField
              id='outlined-basic'
              label='Destination address'
              variant='outlined'
            /> */}
            <ButtonBase
              // onClick={() => connectToWallet()}
              sx={{
                color: '#ffffff',
                backgroundColor: '#2563eB',
                borderRadius: '1.5rem',
                fontSize: '1rem',
                p: 1,
                gap: 1,
              }}
            >
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

          <br />
          {/* Summary */}
          <br />
          <Button variant='contained'>Bridge</Button>
        </Stack>
      </Box>
    </Box>
  );
}
