import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PriorityDisplay({ priority }) {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon
        className={`pr-1 ${priority > 0 ? "text-red-400" : "text-slate-400"}`}
        icon={faFire}
      />
      <FontAwesomeIcon
        className={`pr-1 ${priority > 0 ? "text-red-400" : "text-slate-400"}`}
        icon={faFire}
      />
      <FontAwesomeIcon
        className={`pr-2 ${priority > 1 ? "text-red-400" : "text-slate-400"}`}
        icon={faFire}
      />
      <FontAwesomeIcon
        className={`pr-3 ${priority > 3 ? "text-red-400" : "text-slate-400"}`}
        icon={faFire}
      />
      <FontAwesomeIcon
        className={`pr-4 ${priority > 4 ? "text-red-400" : "text-slate-400"}`}
        icon={faFire}
      />
    </div>
  );
}

export default PriorityDisplay;
