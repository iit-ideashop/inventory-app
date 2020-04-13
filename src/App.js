import React from 'react';
import './App.css';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import ButtonAppBar from './components/ButtonAppBar';
import MainPage from './components/MainPage'
import { Container } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#cfd8dc',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#2196f3',
    },
  },
  typography: {
    h2: {
      fontSize: '3rem',
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar/>
      <Container fixed>
        <MainPage/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
