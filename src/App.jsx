import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Footer, Navbar } from './components'
import { Home, About, Contact, Services, ErrorPage } from "./pages";


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App
