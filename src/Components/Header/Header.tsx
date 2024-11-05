import { Box, Button, Drawer, Typography, useTheme, } from '@mui/material';
import { useState } from 'react';
import { constants } from './constants';
export const Header = () => {
  const theme = useTheme();
  const [booleanDrawer, setBooleanDrawer] = useState(false);
  return (
    <>
      <Box
        width='100%'
        display='flex'
        justifyContent='flex-end'
      >
        <Button onClick={() => setBooleanDrawer(true)}>
          <Typography
            variant='h6'
            fontWeight={900}
          >
            {constants.textButtonOpenDrawer}
          </Typography>
        </Button>
        <Drawer anchor='right' open={booleanDrawer} onClick={() => setBooleanDrawer(false)}>
          <Box
            maxWidth={{ md: '300px', sm: theme.spacing(30) }}
            paddingX={theme.spacing(10)}
            paddingTop={theme.spacing(8)}
            display='flex'
            flexDirection='column'
            gap={theme.spacing(2)}
          >
            <Typography
              variant='h4'
              fontWeight={600}
            >{constants.titleEdit}
            </Typography>
            <Typography>
              {constants.howToEdit}
            </Typography>
            <Typography textAlign='end' variant='h5'>Valeuzis! :)</Typography>
          </Box>
        </Drawer>
      </Box >
    </>
  );
};