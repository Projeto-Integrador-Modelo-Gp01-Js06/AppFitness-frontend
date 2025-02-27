import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ListarExercicios from './components/exercicios/listarexercicios/ListarExercicios'
import FormExercicio from './components/exercicios/formexercicio/FormExercicio'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-gray-200 ">
          <div className="flex-grow">
            <Routes>
              <Route path="/cadastrarexercicio" element={<FormExercicio />} />
              <Route path="/editarexercicio/:id" element={<FormExercicio />} />
              <Route path="/exercicios" element={<ListarExercicios />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
