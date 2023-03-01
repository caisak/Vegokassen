<<<<<<< Updated upstream
=======
import MyComponent from "../Components/ApiTest";
import { ErrorBoundary } from "../Components/ErrorBoundary";
import { ReviewCards } from "../Components/Review";

>>>>>>> Stashed changes
export function HowItWorks() {
  
    return (
      <ErrorBoundary>
      <div>
        <h1>This will be the How it works page</h1>
      </div>
      <MyComponent></MyComponent>
      </ErrorBoundary>
    )
  }
  