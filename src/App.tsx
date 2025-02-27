import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DeletarCategoria from './components/categoria/deletarcategorias/DeletarCategoria'
import FormCategoria from './components/categoria/formcategoria/FormCategoria'

function App() {
  
  return (
    <>
           <BrowserRouter>
        
        <div className="flex flex-col min-h-screen bg-gray-200 ">
          <div className="flex-grow">
            <Routes>
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
        </div>
        
      </BrowserRouter> 
    </>
  )
}

export default App
