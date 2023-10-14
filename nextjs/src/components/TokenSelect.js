import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import LogoIcon from './LogoIcon';

export default function TokenSelect({
  isOrigin,
  label,
  tokens,
  selectedToken,
  setSelectedToken,
}) {
  return (
    <FormControl
      fullWidth
      disabled={!isOrigin}
      variant='filled'
      sx={{
        borderRadius: '0.5vw',
      }}
    >
      <InputLabel
        id='token-select-label'
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
        labelId='token-select-label'
        label='Token'
        value={selectedToken}
        onChange={(event) => setSelectedToken(event.target.value)}
        sx={{
          backgroundColor: 'rgb(0, 0, 0, 0)',
          borderRadius: '0.5vw',
          '& .MuiSelect-select:focus': {
            borderRadius: '0.5vw',
          },
        }}
      >
        {tokens.map((token, index) => (
          <MenuItem key={index} value={token}>
            <LogoIcon name={token} path={`${token}.svg`} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
