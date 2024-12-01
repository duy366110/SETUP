import { styled } from '@mui/system';

const PTheme = styled('p')(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#ddd' : '#333',
  fontSize: '16px',
  lineHeight: 1.5,
  margin: '8px 0',
}));

export default PTheme;