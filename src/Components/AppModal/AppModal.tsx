import { Box, Button, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { constants } from './constants';
interface IModalProps {
  setValidationDelete: (arg: boolean) => void;
  title: string;
};
export const AppModal = ({ setValidationDelete, title }: IModalProps) => {
  const theme = useTheme();
  const nav = useNavigate();

  return (
    <Box
      width='100vw'
      height='100vh'
      position='fixed'
      top='0'
      left='0'
      bgcolor='#2e2b2bc8'
      zIndex={1}
      onClick={() => setValidationDelete(false)}
    >
      <Box
        bgcolor='white'
        zIndex={3}
        position='fixed'
        top='50%'
        left={{ md: '40%', xs: '30%' }}
        width={theme.spacing(25)}
        height={theme.spacing(16)}
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
      >
        <Typography fontWeight='600'>{constants.textDelete}</Typography>
        <Box paddingTop={theme.spacing(2)}>
          <Button color='success'>
            NÃO
          </Button>
          <Button
            onClick={() => {
              localStorage.removeItem(title);
              nav('/');
            }}
            color='error'>
            SIM
          </Button>
        </Box>
      </Box>
    </Box >
  );
};