import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className=" text-white fixed bottom-0 left-0 right-0 p-4">
      <div className="flex justify-around space-x-4 flex-wrap">
        <Link 
          to="/" 
          className="bg-cover bg-center p-4 rounded-lg shadow-lg w-24 h-24 flex items-center justify-center text-black" 
          style={{ backgroundImage: "url('src/assets/beach.jpg')" }}
        >
          Sea
        </Link>
        <Link 
          to="/sky" 
          className="bg-cover bg-center p-4 rounded-lg shadow-lg w-24 h-24 flex items-center justify-center text-white" 
          style={{ backgroundImage: "url('src/assets/sky.jpg')" }}
        >
          Sky
        </Link>
        <Link 
          to="/desert" 
          className="bg-cover bg-center p-4 rounded-lg shadow-lg w-24 h-24 flex items-center justify-center text-white" 
          style={{ backgroundImage: "url('src/assets/desert.jpg')" }}
        >
          Desert
        </Link>
        <Link 
          to="/forest" 
          className="bg-cover bg-center p-4 rounded-lg shadow-lg w-24 h-24 flex items-center justify-center text-white" 
          style={{ backgroundImage: "url('src/assets/forest.jpg')" }}
        >
          Forest
        </Link>
        <Link 
          to="/space" 
          className="bg-cover bg-center p-4 rounded-lg shadow-lg w-24 h-24 flex items-center justify-center text-white" 
          style={{ backgroundImage: "url('src/assets/space.jpg')" }}
        >
          Space
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
