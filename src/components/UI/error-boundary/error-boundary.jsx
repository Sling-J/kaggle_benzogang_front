import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class ErrorBoundary extends Component {
   state = {
      hasError: false,
      errorMessage: null
   };

   componentDidCatch(error, errorInfo) {
      this.setState({ hasError: true, errorMessage: errorInfo })
   }

   render() {
      if (this.state.hasError) {
         return <ErrorIndicator errorMessage={this.state.errorMessage} />
      }

      return this.props.children;
   }
}