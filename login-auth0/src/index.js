//isko abhi poora krna hai

import React from 'react';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


const domain = process.env.REACT_AUTH0_DOMAIN;
const clientId = process.env.REACT_AUTH0_CLIENT_ID;

root.render(
  <Auth0Provider>
    domain = {domain}
    clientId = {clientId}
    redirectUri = {window.location.origin}
    <App />
  </Auth0Provider>
);


