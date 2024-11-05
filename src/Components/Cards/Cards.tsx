import { ContentCopy, DeleteForever } from '@mui/icons-material';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { constants } from './constants';
import { toast } from 'react-toastify';
import { AppModal } from '../AppModal/AppModal';
interface ICardsProps {
  title: string;
  text: string;
};

export const Cards = ({ title, text }: ICardsProps) => {
  const [validationDelete, setValidationDelete] = useState(false);
  const theme = useTheme();

  const SXPaper = {
    height: theme.spacing(25),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(7),
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
  return (
    <>
      {validationDelete && <AppModal title={title} setValidationDelete={setValidationDelete} />}
      <Paper
        elevation={6}
        sx={SXPaper}
      >
        <Box
          width='100%'
          height='10%'
          marginBottom='10%'
          display='flex'
          justifyContent='space-between'
          marginTop={1}
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
        <Box
          width={theme.spacing(20)}
          overflow='auto'
          height='100%'
          display='flex'
          flexDirection='column'
          alignItems='flex-start'
          justifyContent='start'
          gap={2}
        >
          <Typography fontWeight='600'>{title}</Typography>
          <Typography >
            {text}
          </Typography>
        </Box>
      </Paper >
    </>
  );
};