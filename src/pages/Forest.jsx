import Nav from '../components/Nav';

function Forest() {
    return (
      <div className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: "url('src/assets/forest.jpg')" }}>
        <h2 className="text-4xl font-bold mb-4 text-white">Forest</h2>
        <p className="text-lg text-white text-center">The forest is home to countless species of plants and animals, providing shelter and oxygen to the planet.</p>
        <Nav />
      </div>
    );
  }
  
  export default Forest;
  
