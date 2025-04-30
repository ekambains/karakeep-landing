import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Killer from "./components/Killer"
import Features from "./components/Features"

function App() {
  return (
    <div className="h-full w-full bg-black text-white flex justify-center overflow-hidden">
      <div className="w-7xl mx-4 my-4 relative">
        <Killer />
        <Navbar />
        <Hero />
        <Features />
      </div>
    </div>
  )
}

export default App
