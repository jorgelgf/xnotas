import { Box, Input, TextareaAutosize, useTheme } from '@mui/material';
import { constants } from './constants';
import { AppButton } from '../Button/AppButton';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export const NewNote = () => {
  const nav = useNavigate();
  const theme = useTheme();
  const [text, setText] = useState<string | undefined>();
  const [title, setTitle] = useState<string | undefined>();
  const handleClick = () => {
    if (!title || !text) toast.warning("Preencha os campos!", { autoClose: 1000 });
    if (title && text) {
      localStorage.setItem(title.toUpperCase(), text);
      nav('/');
    }
  };
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      paddingY={theme.spacing(2)}
    >
      <Box>
        <Box
          display='flex'
          flexDirection='column'
          gap={theme.spacing(2)}
        >
          <Box>

            <Input
              onChange={(event) => setTitle(event?.target.value)}
              placeholder={constants.placeholderInput}
              sx={{ paddingLeft: theme.spacing(1) }}
            />
          </Box>
          <TextareaAutosize
            onChange={(event) => setText(event?.target.value)}
            minRows='3'
            placeholder={constants.placeholderTextArea}
            style={{ padding: theme.spacing(2) }}
          />
        </Box>
      </Box>
      <AppButton onClick={handleClick}>
        ADC
      </AppButton>
    </Box>
  );
};