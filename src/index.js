import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/App";

// Test import of an asset
import webpackLogo from '@/images/webpack-logo.svg'

// Import of styles
import '@/styles/index.scss';

// Tests

// --- Render on the DOM ---
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
      <App />
  );
