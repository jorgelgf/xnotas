import { Box, TextField, useTheme } from '@mui/material'
import { constants } from './constants';
import { SearchSharp } from '@mui/icons-material';
interface ISearchProps {
  onChange?: () => void;
}

export const Search = ({ onChange }: ISearchProps) => {
  const theme = useTheme();
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      gap={theme.spacing(1)}
      padding={theme.spacing(2)}
    >
      <SearchSharp />
      <TextField
        id="outlined-basic"
        label={constants.placeholder}
        onChange={onChange}
      />
    </Box>
  );
};