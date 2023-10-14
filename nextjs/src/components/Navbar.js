import {
  AppBar,
  Box,
  ButtonBase,
  Icon,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';

export default function Navbar({ walletAddress }) {
  return (
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
            title={<Typography variant='caption'>{walletAddress}</Typography>}
          >
            <ButtonBase
              sx={{
                width: '10rem',
                color: '#0d1216',
                backgroundColor: '#FFFFFFF2',
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
              <Typography noWrap variant='body2'>
                {walletAddress}
              </Typography>
            </ButtonBase>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
