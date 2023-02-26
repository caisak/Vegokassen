import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHandPeace } from "@fortawesome/free-regular-svg-icons";
import { faCoffee, faSpinner, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AddToCartButton } from "../Components/AddToCartButton";
import { Button } from "../Components/Button";

export function Home() {

  
  return (
    <div>
      <h1>This will be the home page</h1>
      <Button />
      <AddToCartButton />
      Your <FontAwesomeIcon icon={faCoffee} /> is hot and ready!
      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faFacebook} size="lg" color="blue" spin />
      <p>
        We deliver all over Sweden! (excluding Halland)
        <FontAwesomeIcon icon={faTruck} bounce flip="horizontal" size="2x" color="green"/>
        Check it out Now! <FontAwesomeIcon icon={faHandPeace} size="2x" color="red" shake border/>
        spinPulse <FontAwesomeIcon icon={faSpinner} spinPulse/>
      </p>
    </div>
  );
}
