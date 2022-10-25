import React, { useState } from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { ApolloProvider } from "@apollo/client";
import { Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './app.css'
import ResponsiveAppBar from './components/AppBar'
import connection from "./connection";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

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
  const [token, setToken] = useState();

  // if(!token) {
  //   return <ThemeProvider theme={theme}><Login setToken={setToken} /></ThemeProvider>
  // }
  return (
    <ApolloProvider client={connection}>
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
   </ApolloProvider>
  )
}

export default App
