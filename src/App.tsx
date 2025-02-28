
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home';
import './index.css'; 
import Projeto from './pages/projeto/Projeto';


function App() {

  return (
    <>
      <BrowserRouter>
       <Navbar />
        <div>
          <div className="min-h-[80vh]">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projeto" element={<Projeto/>} />
          </Routes>
          </div>
        </div>
        <Footer />
       </BrowserRouter>
    </>
  );
}

export default App;
