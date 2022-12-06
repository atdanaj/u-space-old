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
  }
});





function App() {
  const [token, setToken] = useState();

  // if(!token) {
  //   return <ThemeProvider theme={theme}><Login setToken={setToken} /></ThemeProvider>
  // }
  return (
    <ApolloProvider client={connection}>
        {/* <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Waiting+for+the+Sunrise"></link> */}
    <ThemeProvider theme={theme}>
    <Root>
    <ResponsiveAppBar/>
    <div className="content">
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Dynamic path="dynamic" />
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </div>
  </Root>
  </ThemeProvider>
   </ApolloProvider>
  )
}

export default App
