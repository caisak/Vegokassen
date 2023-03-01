import MyComponent from "../Components/ApiTest";
import { ErrorBoundary } from "../Components/ErrorBoundary";

                                        
export function HowItWorks() {
  
    return (
      <ErrorBoundary>
      <MyComponent></MyComponent>
      </ErrorBoundary>
    )
  }
  