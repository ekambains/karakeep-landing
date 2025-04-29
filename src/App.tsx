import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function App() {
  return (
    <div className="h-screen w-full bg-black text-white flex justify-center">
      <div className="w-7xl mx-4 my-4">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App
