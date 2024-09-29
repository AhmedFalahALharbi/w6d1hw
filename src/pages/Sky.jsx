import Nav from '../components/Nav';

function Sky() {
    return (
      <div className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/55787/pexels-photo-55787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
        <h2 className="text-4xl font-bold mb-4 text-black">Sky</h2>
        <p className="text-lg text-black text-center">The sky is a vast expanse of atmosphere that we see from Earth, often appearing blue during the day.</p>
        <Nav />
      </div>
    );
  }
  
  export default Sky;
  
