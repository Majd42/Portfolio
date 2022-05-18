import React from "react";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services";
import Portfolio from './components/portfolio/Portfolio'
import Testmonials from './components/testemonials/Testimonials'
import './index.css'
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
