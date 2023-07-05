import Navbar from "../containers/Navbar/Navbar";
import Hero from "../containers/Hero/Hero"
import Stories from "../containers/Stories/Stories";
import WhatWeDo from "../containers/WhatWeDo/WhatWeDo";
import Testimonials from "../containers/Testimonials/Testimonials";
import About from "../containers/About/About";
import Footer from "../containers/Footer/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Stories />
      <WhatWeDo />
      <Testimonials />
      <About />
      <Footer />
    </>
  )
}

export default App
