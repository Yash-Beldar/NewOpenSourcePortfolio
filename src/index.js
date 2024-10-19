// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ErrorBoundary from './ErrorBoundary'; // Import the ErrorBoundary
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.scss';

ReactDOM.render(
  // <React.StrictMode>
    <ErrorBoundary> {/* Wrap App with ErrorBoundary */}
      <App />
    </ErrorBoundary>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
