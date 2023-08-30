// import Footer from "./components/Footer"
// import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Footer, Navbar } from './components'
import { Home, About, Contact, Services } from "./pages";

// import Form2 from './pages/Form2'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<Services/>} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App
