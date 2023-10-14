import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import LogoIcon from './LogoIcon';

export default function TokenSelect({
  disabled,
  label,
  tokens,
  selectedToken,
  setToken,
}) {
  return (
    <FormControl
      disabled={disabled}
      fullWidth
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
        onChange={(event) => setToken(event.target.value)}
        sx={{
          borderRadius: '0.5vw',
          '& .MuiSelect-select:focus': {
            borderRadius: '0.5vw',
          },
        }}
      >
        {tokens.map((token, index) => (
          <MenuItem key={index} value={token}>
            <LogoIcon
              name={token}
              path={token === 'stbETH' ? 'ETH.svg' : `${token}.svg`}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
