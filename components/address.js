  
import { FaCompass } from 'react-icons/fa';

export default function Address() {
  return (
    <div className="w-full flex m-2 items-start">
      <div className="flex items-center mt-1">
        <FaCompass />
        {/* <p className="ml-2">Address: </p> */}
      </div>
      <div className="ml-2 w-1/2">
        <p>Besar Tembung No 18</p>
        <p>Tembung, 20371</p>
        <p>Percut Sei Tuan</p>
      </div>
    </div>
  );
}