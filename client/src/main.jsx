import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  global: {
    body: {
      background: '#444'
    }
  }
}

const fonts = {
  body: 'Thoma',
  heading: 'Courier New'
}

const theme = extendTheme({ colors, fonts });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
); 
