import { Box, Icon } from '@mui/material';

export default function LogoIcon({ name, path }) {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' gap='0.2vw'>
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
