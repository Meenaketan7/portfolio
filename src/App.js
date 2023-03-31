import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery"
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Testimonials from './scenes/Testimonials';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer'
function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)"); //check the width of the image is above or below the size
  // change  the color of navbar when scroll
  const [isTopPage, setIsTopPage] = useState(true);
  useEffect(() => {
    const handleScroll = () =>{
      if (window.scrollY === 0) setIsTopPage(true);
      if (window.scrollY !== 0) setIsTopPage(false);
    }
    window.addEventListener("scroll",handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])
  
  return (
    <div className="app bg-deep-blue">
    <Navbar
        isTopOfPage={isTopPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* Dot component as navbar */}
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreen && (
          <DotGroup
            selectedPage = {selectedPage}
            setSelectedPage = {setSelectedPage}
          />
        )}
        <Landing setSelectedPage ={setSelectedPage}/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills/>
      </div>
      <div className="pt-10">
      <LineGradient/>
      </div>
      <div className="w-5/6 mx-auto">
        <Projects/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
        <Testimonials/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
