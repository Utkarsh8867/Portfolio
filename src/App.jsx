import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Analytics from "./components/Analytics";
import { trackPageView } from "./utils/analytics";

const MainPage = () => {
  useEffect(() => {
    // Track page view when main page loads
    trackPageView();
  }, []);

  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      {/* <Feedbacks /> */}
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin-analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
