import { Box, ButtonBase, Icon } from '@mui/material';

export default function DestinationSection() {
  return (
    <Box width='100%' display='flex' justifyContent='space-around' gap='1vw'>
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
  );
}
