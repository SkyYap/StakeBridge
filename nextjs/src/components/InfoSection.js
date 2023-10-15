import { Box, Typography } from '@mui/material';

export default function InfoSection({ selectedToken }) {
  return (
    <Box
      width='100%'
      paddingY='1vh'
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      align='center'
      backgroundColor='rgb(0, 0, 0, 0.15)'
      borderRadius='0.5vw'
    >
      <Box paddingX='0.7vw' display='flex' justifyContent='space-around'>
        <Typography width='50%' align='left'>
          Bridge Fees
        </Typography>
        <Typography width='50%' align='right'>
          0
        </Typography>
      </Box>
      <Box paddingX='0.7vw' display='flex' justifyContent='space-around'>
        <Typography width='50%' align='left'>
          Relayer Gas Fees
        </Typography>
        <Typography width='50%' align='right'>
          0.01994 {selectedToken}
        </Typography>
      </Box>
      <Box paddingX='0.7vw' display='flex' justifyContent='space-around'>
        <Typography width='50%' align='left'>
          Estimated Wait Time
        </Typography>
        <Typography width='50%' align='right'>
          ~20 minutes
        </Typography>
      </Box>
      <Box paddingX='0.7vw' display='flex' justifyContent='space-around'>
        <Typography width='70%' align='left'>
          Maximum Transfer Amount
        </Typography>
        <Typography width='30%' align='right'>
          500 {selectedToken}
        </Typography>
      </Box>
    </Box>
  );
}
