import React from "react";
import NavBar from "./Navbar";
import Header from "./Header";
import Portfolio from "./Potfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
    return(
       <div>
            <NavBar />
            <Header />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
       </div>
    )
};

export default App;