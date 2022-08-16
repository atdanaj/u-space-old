import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import './app.css'
import ResponsiveAppBar from './components/AppBar'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#78909c',
      contrastText: '#dde1e4',
    },
    secondary: {
      main: '#6be405',
    },
  },
  typography: {
    fontFamily: 'Jaldi',
    h1: {
      fontFamily: 'Waiting for the Sunrise',
    },
    h2: {
      fontFamily: 'Waiting for the Sunrise',
    },
    h3: {
      fontFamily: 'Waiting for the Sunrise',
    },
    h4: {
      fontFamily: 'Waiting for the Sunrise',
    },
    h5: {
      fontFamily: 'Waiting for the Sunrise',
    },
    h6: {
      fontFamily: 'Waiting for the Sunrise',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}> <Root>
    <ResponsiveAppBar/>
    <div className="content">
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Dynamic path="dynamic" />
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </div>
  </Root></ThemeProvider>
   
  )
}

export default App
