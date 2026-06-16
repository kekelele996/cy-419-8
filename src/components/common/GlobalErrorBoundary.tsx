import React from 'react';
import { logGame } from '../../utils/gameLogger';

type ErrorBoundaryState = { error: Error | null };

export class GlobalErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error) {
    logGame('ERROR_BOUNDARY', { message: error.message });
  }

  render() {
    return this.state.error ? <div className="panel">异常：{this.state.error.message}</div> : this.props.children;
  }
}
