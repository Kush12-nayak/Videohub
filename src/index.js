import { ColorModeScript, ChakraProvider,theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import ColorModeSwicher  from "./ColorModeSwitcher";


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwicher>
      </ColorModeSwicher>
    <App />
    </ChakraProvider>
  </StrictMode>
);


