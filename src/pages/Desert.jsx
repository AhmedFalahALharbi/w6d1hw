import Nav from '../components/Nav';

function Desert() {
    return (
      <div className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: "url('src/assets/desert.jpg')" }}>
        <h2 className="text-4xl font-bold mb-4 text-white">Desert</h2>
        <p className="text-lg text-white text-center">The desert is a dry, barren area with very little rainfall and extreme temperatures, known for its vast sand dunes.</p>
        <Nav />
      </div>
    );
  }
  
  export default Desert;
  
