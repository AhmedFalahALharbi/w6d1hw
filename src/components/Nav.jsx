import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className=" text-white fixed bottom-0 left-0 right-0 p-4">
      <div className="flex justify-around space-x-4 flex-wrap">
        <Link 
          to="/" 
          className="bg-cover bg-center p-4 rounded-lg shadow-lg w-24 h-24 flex items-center justify-center text-black" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
        >
          Sea
        </Link>
        <Link 
          to="/sky" 
          className="bg-cover bg-center p-4 rounded-lg shadow-lg w-24 h-24 flex items-center justify-center text-white" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/55787/pexels-photo-55787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}

        >
          Sky
        </Link>
        <Link 
          to="/desert" 
          className="bg-cover bg-center p-4 rounded-lg shadow-lg w-24 h-24 flex items-center justify-center text-white" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
        >
          Desert
        </Link>
        <Link 
          to="/forest" 
          className="bg-cover bg-center p-4 rounded-lg shadow-lg w-24 h-24 flex items-center justify-center text-white" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/338936/pexels-photo-338936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
        >
          Forest
        </Link>
        <Link 
          to="/space" 
          className="bg-cover bg-center p-4 rounded-lg shadow-lg w-24 h-24 flex items-center justify-center text-white" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
        >
          Space
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
