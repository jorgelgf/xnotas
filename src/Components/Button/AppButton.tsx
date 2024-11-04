import { Button, Typography, useTheme } from '@mui/material';
import { ReactNode } from 'react';
interface IAppButton {
  children: ReactNode;
  onClick: () => void;
};
export const AppButton = ({ children, onClick }: IAppButton) => {
  const theme = useTheme();
  return (
    <Button
      onClick={onClick}
      sx=
      {{
        backgroundColor: 'white',
        paddingY: theme.spacing(7.5),
        paddingX: theme.spacing(3),
        border: 'solid 1px grey',
        ":hover": { backgroundColor: '#a4f7a4' }

      }}
    >
      <Typography color='black'>{children}</Typography>
    </Button>
  );
};