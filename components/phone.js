import { FaPhoneAlt } from "react-icons/fa";

export default function Phone() {
  return (
    <a href="tel:+6285270779271" className="flex items-center m-2">
      <FaPhoneAlt/>
      <p className="ml-2">
        0852-7077-9271
      </p>
    </a>
  );
}