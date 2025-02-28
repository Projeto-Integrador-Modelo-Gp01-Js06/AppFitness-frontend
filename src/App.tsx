import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Sobre from './pages/sobre/Sobre';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sobre />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;