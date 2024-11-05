import { Button, Container, useTheme } from '@mui/material'
import { ReactNode, useEffect, useState } from 'react'
import { Header } from '../index';
import { ArrowUpwardOutlined } from '@mui/icons-material';
interface ILayoutProps {
  children: ReactNode;
};
const SXButton = {
  letterSpacing: '2px',
  position: 'fixed',
  fontSize: '3rem',
  fontWeight: '500',
  right: ' 0',
  top: '59vh',
  zIndex: '1',
  color: '#e79805',
  backgroundColor: 'transparent',
  border: '1px solid orange',
  cursor: 'pointer',
  ':hover': {
    'color': '#f1b33f'
  },
  animation: 'anime 2s forwards',
  opacity: '0',
  '@keyframes anime': {
    'to': {
      'transition': 'opacity 1s ease-in-out',
      'opacity': '0.7',
    }
  }
};
export const Layout = ({ children }: ILayoutProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();

  const handleClickBack = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
      if (scrollPercent >= 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      };
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container style={{ paddingBottom: theme.spacing(8) }}>
      {isVisible && <Button sx={SXButton} onClick={handleClickBack}><ArrowUpwardOutlined /></Button>}
      <Header />
      {children}
    </Container>
  );
};