import { ContentCopy, DeleteForever, Edit } from '@mui/icons-material';
import { Box, Button, Paper, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { constants } from './constants';
import { toast } from 'react-toastify';
interface ICardsProps {
  title: string;
  text: string;
};

export const Cards = ({ title, text }: ICardsProps) => {
  const [validationDelete, setValidationDelete] = useState(false);
  const theme = useTheme();
  const nav = useNavigate();

  const SXPaper = {
    height: theme.spacing(22),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),
    paddingX: theme.spacing(2)
  };
  const handleClickDelete = () => {
    setValidationDelete(true);
  };
  const handleClickCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copiado com sucesso!", { autoClose: 1000 });

    } catch (error) {
      toast.error('Gerou um erro!');
      console.error("ERRO GERADO: ", error);
    };
  };
  const ModalValidation = () => {
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

  return (
    <>
      {validationDelete && <ModalValidation />}
      <Paper
        elevation={6}
        sx={SXPaper}
      >
        <Box
          textAlign='end'
          sx={{ cursor: 'pointer' }}
        >
          <abbr title={constants.textEditTitle}>
            <Edit />
          </abbr>
        </Box>
        <Box
          width={theme.spacing(20)}
          overflow={'auto'}
          height='100%'
          display='flex'
          flexDirection='column'
          alignItems='flex-start'
          justifyContent='space-between'
        >
          <Typography fontWeight='600'>{title}</Typography>
          <Typography >
            {text}
          </Typography>
          <Box
            width='100%'
            display='flex'
            justifyContent='space-between'
          >
            <abbr title={constants.textCopyTitle}>
              <ContentCopy
                onClick={handleClickCopy}
                sx={{ cursor: 'pointer' }} />
            </abbr>
            <abbr title={constants.textDeleteTitle}>
              <DeleteForever
                onClick={handleClickDelete}
                sx={{ color: 'red', cursor: 'pointer' }}
              />
            </abbr>
          </Box>
        </Box>
      </Paper >
    </>
  );
};