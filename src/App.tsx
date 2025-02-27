import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DeletarCategoria from './components/categoria/deletarcategorias/DeletarCategoria'
import FormCategoria from './components/categoria/formcategoria/FormCategoria'
import ListarCategorias from './components/categoria/listarcategorias/ListarCategorias'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  
  return (
    <>
           <BrowserRouter>
           <Navbar />
        <div className="flex flex-col min-h-screen bg-gray-200 bg-cover bg-center">
          <div className="flex-grow">
            <Routes>
            <Route path="/categorias" element={<ListarCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter> 
      </>
    );
}

export default App