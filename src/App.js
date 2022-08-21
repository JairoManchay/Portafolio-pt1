import React, { useState, useEffect } from "react";
import "./App.css";
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Slider from "./components/slider/Slider";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";

function App() {
  // Guardando la posicion del desplazamientoAltura-setDesplazamientoAltura(scrollHeight-setScrollHeight))
  const [desplazamientoAltura, setDesplazamientoAltura] = useState(0);
  // Manejando el desplazamiento
  const handleScroll = () => {
    const position = window.pageYOffset;
    setDesplazamientoAltura(position);
  };

  // Controlando el Scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [desplazamientoAltura]);

  return (
    <div className="App">
      <Navbar isScrolling={desplazamientoAltura}/>
      <Cover />
      <About />
      <Slider />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
