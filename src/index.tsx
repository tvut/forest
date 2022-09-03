import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ConvexProvider, ConvexReactClient } from "convex/react";
import clientConfig from "./convex/_generated/clientConfig";

const convex = new ConvexReactClient(clientConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </React.StrictMode>
);
