import { Box, useTheme } from '@mui/material';
import { Layout, NewNote, Cards, Search } from '../../Components'
import { useState } from 'react';
export const Home = () => {
  const [inputText, setInputText] = useState('');
  const theme = useTheme();

  const ShowCards = () => {
    const filterText = Object.keys(localStorage).
      filter((text) => text.includes(inputText));
    return filterText.map((item, index) => {
      console.log(typeof (item[0]));
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
        <ShowCards />
        Vou atualizar aqui
      </Box>
    </Layout >
  );
}

