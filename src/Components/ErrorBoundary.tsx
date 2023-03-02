import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>Något gick fel!</h1>
      )
    }
    return (
      this.props.children
    )
  }
}

export default ErrorBoundary;

