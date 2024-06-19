import './App.css';
import HomeData from './components/HomeData';
import Service from './components/Service';
import Footer from './components/Footer';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeData />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<About />} /> 
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
