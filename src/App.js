import React, { useState } from 'react'
import { Root, addPrefetchExcludes } from 'react-static'
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './app.css'
import ResponsiveAppBar from './components/AppBar'
import connection from "./connection";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Manifest from './pages/Manifest';
import Visualize from './pages/Visualize';
import Login from './pages/Login'
import { useAuth0 } from "@auth0/auth0-react";

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
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <ApolloProvider client={connection}>
    <ThemeProvider theme={theme}>
    <Root>
    { isAuthenticated && <ResponsiveAppBar/> }
    <div className="content">
      <React.Suspense fallback={<em>Loading...</em>}>
        <BrowserRouter>
         <Routes>
          <Route path="/visualize" element={ <Visualize/> } />
          <Route path="/manifest" element={ <Manifest/> } />
          <Route path="/" element={ <Login/> } />
         </Routes>
        </BrowserRouter>
      </React.Suspense>
    </div>
  </Root>
  </ThemeProvider>
   </ApolloProvider>
  )
}

export default App
