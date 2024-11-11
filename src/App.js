import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Gallery from './Pages/Gallery';
import Blog from './Pages/Blog';
import Volunteers from './Pages/Volunteers';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/volunteers' element={<Volunteers />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
