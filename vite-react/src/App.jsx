import Navbar from './Navbar';
import BookNow from './booknow';
import BG from './assets/homepage-bg.jpg';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Hero Section with BG image */}
      <section
        className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center pt-16"
        style={{ backgroundImage: `url(${BG})` }}
      >
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <h3 className="text-3xl font-bold mb-2 text-white">Explore India!</h3>
          <p className="mb-4 text-white">Trips made simpler!</p>
          <button className="btn text-white px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition">
            Discover more
          </button>
        </div>
      </section>

      {/* BookNow Section with its own background */}
      <section className="min-h-400px flex items-center justify-center bg-blue-600">
        <BookNow />
      </section>
    </div>
  );
}

export default App;