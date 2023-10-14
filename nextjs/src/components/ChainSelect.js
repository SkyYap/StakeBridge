import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import ChainIcon from './ChainIcon';

export default function ChainSelect({
  label,
  chains,
  selectedChain,
  setChain,
}) {
  return (
    <FormControl
      fullWidth
      variant='filled'
      sx={{
        borderRadius: '0.5vw',
      }}
    >
      <InputLabel
        id='chain-select-label'
        sx={{
          '&.Mui-focused': {
            color: 'black',
          },
        }}
      >
        {label}
      </InputLabel>
      <Select
        disableUnderline
        labelId='chain-select-label'
        label='Chain'
        value={selectedChain}
        onChange={(event) => setChain(event.target.value)}
        sx={{
          borderRadius: '0.5vw',
          '& .MuiSelect-select:focus': {
            borderRadius: '0.5vw',
          },
        }}
      >
        {chains.map((chain) => (
          <MenuItem value={chain}>
            <ChainIcon name={chain} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
