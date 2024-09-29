import Nav from '../components/Nav';

function Forest() {
    return (
      <div className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/338936/pexels-photo-338936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
        <h2 className="text-4xl font-bold mb-4 text-white">Forest</h2>
        <p className="text-lg text-white text-center">The forest is home to countless species of plants and animals, providing shelter and oxygen to the planet.</p>
        <Nav />
      </div>
    );
  }
  
  export default Forest;
  
