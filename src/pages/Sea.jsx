import Nav from '../components/Nav';

function Sea() {
    return (
      <div className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
        <h2 className="text-4xl font-bold mb-4 text-black">Sea</h2>
        <p className="text-lg text-black text-center">The sea is vast and full of life. It covers more than 70% of Earth`s surface.</p>
        <Nav />
      </div>
    );
  }
  
  export default Sea;
  