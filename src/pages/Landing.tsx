import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";  // Importando Navbar
import Footer from "../components/footer/Footer";  // Importando Footer

const Landing = () => {
  return (
    <div className="bg-black text-lime-400 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Conteúdo Principal */}
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold">FIT JOURNEY</h1>
        <p className="text-lg">PERSONAL TRAINER</p>
      </div>

      {/* Cards */}
      <div className=" flex justify-center gap-20 p-10">
        <Link to="/cardio" className="text-center">
          <h2 className="text-2xl font-bold">Cardio</h2>
          <img
            src="/images/cardio.gif"
            alt="Cardio GIF"
            className="rounded-lg"
          />
        </Link>
        
        <Link to="/musculacao" className="text-center">
          <h2 className="text-2xl font-bold">Musculação</h2>
          <img
            src="/images/musculacao.gif"
            alt="Musculação GIF"
            className="rounded-lg"
          />
        </Link>

        <Link to="/coletivas" className="text-center">
          <h2 className="text-2xl font-bold">Coletivas</h2>
          <img
            src="/images/coletivas.gif"  
            alt="Coletivas GIF"
            className="rounded-lg"
          />
        </Link>
      </div>

      {/* Espaços para links */}
      <div className="flex justify-center gap-19 p-6">
        {/* Espaço do Aluno */}
        <Link
          to="/home"
          className="bg-lime-400 text-black p-2 rounded-lg font-bold w-1/5 text-center hover:text-white"
        >
          ESPAÇO DO ALUNO →
        </Link>

        {/* Cadastrar Exercício */}
        <Link
          to="/cadastrarexercicio"
          className="bg-lime-400 text-black p-2 rounded-lg font-bold w-1/5 text-center hover:text-white"
        >
          CADASTRAR EXERCÍCIO →
        </Link>

        {/* Cadastrar Categoria */}
        <Link
          to="/cadastrarcategoria"
          className="bg-lime-400 text-black p-2 rounded-lg font-bold w-1/5 text-center hover:text-white"
        >
          CADASTRAR CATEGORIA →
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;