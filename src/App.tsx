import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Killer from "./components/Killer"
import Features from "./components/Features"
import Platforms from "./components/Platforms"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="h-full w-full bg-black text-white flex justify-center overflow-hidden">
      <div className="w-7xl mx-4 my-4 relative">
        <Killer />
        <Navbar />
        <Hero />
        <Features />
        <Platforms />
        <Footer />
      </div>
    </div>
  )
}

export default App
