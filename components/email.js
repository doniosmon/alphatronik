import { FaEnvelope } from "react-icons/fa";

export default function Email() {
  return (
    <a href="mailto:cs@alphatronik.id" className="flex items-center m-2">
      <FaEnvelope/>
      <p className="ml-2">
        cs@alphatronik.id
      </p>
    </a>
  );
}