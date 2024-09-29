import Nav from '../components/Nav';

function Space() {
    return (
      <div className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: "url('src/assets/space.jpg')" }}>
        <h2 className="text-4xl font-bold mb-4 text-white">Space</h2>
        <p className="text-lg text-white text-center">Space is a vast, infinite expanse that contains all stars, planets, galaxies, and beyond. It is the final frontier.</p>
        <Nav />
      </div>
    );
  }
  
  export default Space;
  
