import { styled } from '@mui/system';

export const H1Theme = styled('h1')(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '16px 0',
}));

export const H2Theme = styled('h2')(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '14px 0',
}));

export const H3Theme = styled('h3')(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '12px 0',
}));

export const H4Theme = styled('h4')(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '10px 0',
}));

export const H5Theme = styled('h5')(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '8px 0',
}));

export const H6Theme = styled('h6')(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '6px 0',
}));
