import { Box, Icon } from '@mui/material';

export default function LogoIcon({ name, path }) {
  return (
    <Box
      display='flex'
      justifyContent='flex-start'
      alignItems='center'
      gap='0.3vw'
      fontSize='1.2rem'
    >
      <Icon>
        <img
          style={{
            display: 'flex',
            width: 'inherit',
            height: 'inherit',
          }}
          src={`/${path}`}
        />
      </Icon>
      {name}
    </Box>
  );
}
