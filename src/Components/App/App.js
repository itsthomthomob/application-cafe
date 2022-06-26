import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import './App.css';
import Home from '../Pages/Home';

// Theme imports
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  contactButton: {
    main: '#e53e3e',
  },
  palette: {
    primary: {
      background: {
        default: "#0A0A0A"
      },
      light: '#0A0A0A',
      main: '#0A0A0A',
      dark: '#0A0A0A',
      contrastText: '#F0EFF4'
    },
    secondary: {
      light: '#0A0A0A',
      main: '#0A0A0A',
      dark: '#0A0A0A',
      contrastText: '#F0EFF4'
    },
    background: {
      paper: '#191155'
    },
  
  }
});


theme.typography.h1 = {
  fontWeight: '400',
  fontSize: '32px',
  color: '#F0EFF4',
  '@media (min-width:600px)': {
    fontSize: '32px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '32px',
  },
};

theme.typography.h2 = {
  fontWeight: '400',
  fontSize: '24px',
  color: '#F0EFF4',
  '@media (min-width:600px)': {
    fontSize: '24px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
  },
};

theme.typography.h3 = {
  fontWeight: '300',
  fontSize: '12px',
  color: '#F0EFF4',
  '@media (min-width:600px)': {
    fontSize: '12px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '48px',
  },
};

theme.typography.h4 = {
  fontWeight: '300',
  fontSize: '24px',
  color: '#F0EFF4',
  '@media (min-width:600px)': {
    fontSize: '48px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '48px',
  },
};

theme.typography.p = {
  fontWeight: '100',
  fontSize: '12px',
  color: '#F0EFF4',
  '@media (min-width:600px)': {
    fontSize: '12px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '12px',
  },
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
          </Routes>

        </Router>
      </ThemeProvider>
  );
  }
}

export default App;
