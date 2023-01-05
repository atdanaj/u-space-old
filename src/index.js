import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from "@auth0/auth0-react";

// Your top level component
import App from './App'
import LoginButton from './components/Login';
import LogoutButton from './components/Logout';

// Render your app
if (typeof document !== 'undefined') {
  ReactDOM.render(
    <Auth0Provider
      domain="dev-ljt58geth7fbohns.us.auth0.com"
      clientId="7wTQ0WWpyNx5072pctCWf0bbIS1SWycf"
      redirectUri={window.location.origin}
    >
      <App />
      <LoginButton/>
      <LogoutButton/>
    </Auth0Provider>,
    document.getElementById("root")
  );
}
