import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Experiance from "./sections/Experiance";
import Home from "./sections/Home";
import Project from "./sections/Project";
import Skills from "./sections/Skills";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import CustomCursor from "./components/CustomCursor";




export default function App() {
  return (
    <div className = "relative gradient text-white">
    <CustomCursor/>
    <ParticlesBackground/>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Experiance/>
    <Testimonials/>
    <Contact/>
    <Footer/>  

    </div>
  )
}