import React from 'react';
import './App.css';
import Routes from './routes';
import muitheme from './Theme';
import { ThemeProvider } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={muitheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
