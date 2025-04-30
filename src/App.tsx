import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Killer from "./components/Killer"

function App() {
  return (
    <div className="h-screen w-full bg-black text-white flex justify-center overflow-hidden">
      <div className="w-7xl mx-4 my-4 relative">
        <Killer />
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App
