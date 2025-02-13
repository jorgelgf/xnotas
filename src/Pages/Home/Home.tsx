import { Box, useTheme } from '@mui/material';
import { Layout, NewNote, Cards, Search } from '../../Components'
import { useState } from 'react';
export const Home = () => {
  const [inputText, setInputText] = useState('');
  const theme = useTheme();

  const ShowCards = () => {
    const filterText: string[] = Object.keys(localStorage).
      filter((text: string) => text.includes(inputText));
    return filterText.map((item, index) => {
      return (
        < div key={index} >
          {
            filterText && <Cards title={item} text={`${localStorage.getItem(item)}`} />
          }
        </div >
      );
    });
  };
  return (
    <Layout>
      <NewNote />
      <Search
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputText(event.target.value.toUpperCase())}
      />

      <Box
        display='flex'
        flexWrap='wrap'
        marginTop='16px'
        justifyContent='center'
        gap={theme.spacing(2)}
      >
        tenho mais este campo
        <ShowCards />
        Vou atualizar aqui
      </Box>
    </Layout >
  );
}

