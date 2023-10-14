import { ButtonBase, Icon } from '@mui/material';
import connectToWallet from '@/lib/connectToWallet';

export default function Connect({ setWalletAddress }) {
  return (
    <ButtonBase
      onClick={async () => setWalletAddress(await connectToWallet())}
      sx={{
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
            borderRadius: '3rem',
          }}
          src={`/metamask.svg`}
        />
      </Icon>
      Connect Wallet
    </ButtonBase>
  );
}
