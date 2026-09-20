import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-cream flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-terracotta/10 text-terracotta rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">☕</span>
            </div>
            <h1 className="font-script text-3xl font-bold text-terracotta mb-3">
              Something went wrong
            </h1>
            <p className="text-espresso/80 text-sm mb-6">
              We're sorry — looks like something broke. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-terracotta text-cream font-semibold text-sm rounded-full shadow-md hover:bg-terracotta/90 transition-all cursor-pointer"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
