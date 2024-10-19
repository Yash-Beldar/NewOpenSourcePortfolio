// src/ErrorBoundary.js

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error occurred: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI with error message
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{this.state.error ? this.state.error.message : 'An error occurred.'}</p>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
