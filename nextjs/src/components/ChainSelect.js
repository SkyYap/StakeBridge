import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import LogoIcon from './LogoIcon';

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
        {chains.map((chain, index) => (
          <MenuItem
            key={index}
            value={chain}
            sx={{
              paddingLeft: '12px',
            }}
          >
            <LogoIcon name={chain} path={`${chain}.svg`} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
