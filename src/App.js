import React, { useState } from 'react'
import { Root, addPrefetchExcludes } from 'react-static'
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './app.css'
import ResponsiveAppBar from './components/AppBar'
import connection from "./connection";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Visualize from './pages/Visualize';

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
  return (
    <ApolloProvider client={connection}>
    <ThemeProvider theme={theme}>
    <Root>
    <ResponsiveAppBar/>
    <div className="content">
      <React.Suspense fallback={<em>Loading...</em>}>
        <BrowserRouter>
         <Routes>
          <Route path="/visualize" element={ <Visualize/> } />
          <Route path="/" element={ <Index/> } />
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
