import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PriorityDisplay() {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon className="text-red-400" icon={faFire} />
      <FontAwesomeIcon className="text-red-400" icon={faFire} />
      <FontAwesomeIcon className="text-red-400" icon={faFire} />
      <FontAwesomeIcon className="text-red-400" icon={faFire} />
      <FontAwesomeIcon className="text-red-400" icon={faFire} />
    </div>
  );
}

export default PriorityDisplay;
