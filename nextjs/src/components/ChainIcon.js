import { Box, Icon } from '@mui/material';

export default function ChainIcon({ name }) {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' gap='0.2vw'>
      <Icon>
        <img
          style={{
            display: 'flex',
            width: 'inherit',
            height: 'inherit',
          }}
          src={`/${name.toLowerCase()}.svg`}
        />
      </Icon>
      {name}
    </Box>
  );
}
