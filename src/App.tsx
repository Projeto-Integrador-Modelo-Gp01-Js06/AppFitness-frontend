import { BrowserRouter, Routes } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Sobre from './pages/sobre/Sobre';

function App() {

  return (
    <>
      <BrowserRouter>
       <Navbar />
        <div>
          <div className="min-h-[75vh]">
          <Routes>

          </Routes>
          </div>
        </div>
        <Footer />
       </BrowserRouter>
    </>
  )
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sobre />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;