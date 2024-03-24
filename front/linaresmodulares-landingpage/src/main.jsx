import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import {ContextProvider} from './components/Context.jsx';
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
    <ContextProvider>
      <App/>
    </ContextProvider>
    </ParallaxProvider>
  </React.StrictMode>
);
