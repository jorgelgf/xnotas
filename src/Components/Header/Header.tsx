import { Box, Typography, useTheme, } from '@mui/material';
export const Header = () => {
  const theme = useTheme();
  return (
    <Box textAlign='center' paddingY={theme.spacing(5)}>
      <Typography variant="h4" fontWeight={500}>
        NOTAS
      </Typography>
    </Box>
  );
};