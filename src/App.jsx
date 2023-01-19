import React from "react";
import Navbar from "./sections/navbar/Navbar";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portifolio from "./sections/portifolio/Portifolio";
import Testimonials from "./sections/testimonials/Testimonials";
import FAQs from "./sections/faqs/FAQs";
import Header from "./sections/header/Header";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portifolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  );
};

export default App;
