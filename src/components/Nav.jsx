import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className=" text-white fixed bottom-0 left-0 right-0 p-4">
      <div className="flex justify-around space-x-4 flex-wrap">
        <Link to="/" className="bg-blue-500 text-white p-4 rounded-lg shadow-lg text-center w-24 hover:bg-blue-600">
          Sea
        </Link>
        <Link to="/sky" className="bg-blue-300 text-white p-4 rounded-lg shadow-lg text-center w-24 hover:bg-blue-400">
          Sky
        </Link>
        <Link to="/desert" className="bg-yellow-500 text-white p-4 rounded-lg shadow-lg text-center w-24 hover:bg-yellow-600">
          Desert
        </Link>
        <Link to="/forest" className="bg-green-500 text-white p-4 rounded-lg shadow-lg text-center w-24 hover:bg-green-600">
          Forest
        </Link>
        <Link to="/space" className="bg-gray-900 text-white p-4 rounded-lg shadow-lg text-center w-24 hover:bg-gray-800">
          Space
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
