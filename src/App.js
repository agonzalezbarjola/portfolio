
import './App.scss';
import Cover from "./components/Cover/Cover";
import Navbar from "./components/Navbar/Nabvar"
import React, { useState, useEffect } from "react";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling= {scrollHeight}/>
      <Cover />
    </div>
  );
}

export default App;
