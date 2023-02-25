import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Home() {
  return (
    <div>
      <h1>This will be the home page</h1>
      <FontAwesomeIcon icon="check-square" />
      <FontAwesomeIcon icon="check-square" />
      Your <FontAwesomeIcon icon={faCoffee}/> is hot and ready!
      
    </div>
  )
}
