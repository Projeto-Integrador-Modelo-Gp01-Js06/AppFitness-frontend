
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { Link } from "react-router-dom"

function Navbar() {

	return (
		<>
		<div className="flex justify-center w-full py-4 text-white bg-black">
  <div className="container flex items-center justify-between ms-8 text-xl">
    <div className="flex items-center gap-8 py-4 ps-8">
	<Link to="" className="hover:underline hover:text-[#d8ff57] transition duration-300">
        Inicio
      </Link>
      <Link to="" className="hover:underline hover:text-[#d8ff57] transition duration-300">
        Serviços
      </Link>
      <Link to="" className="hover:underline hover:text-[#d8ff57] transition duration-300">
        Sobre
      </Link>
      <Link to="" className="hover:underline hover:text-[#d8ff57] transition duration-300">
        Contato
      </Link>  
		</div>

					<div className="relative flex items-center justify-center w-1/2 text-white">
						<form 
							className="flex items-center justify-center w-full"
						>
							<input
								className="w-6/12 px-3 py-2 bg-black rounded-full h-8 focus:outline-none border border-white"
								type="search"
								placeholder="Pesquisar"
								id="busca"
								name="busca"
								required
                                
							/>
							<button
								type="submit"
								className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-black bg-[#d1e1c5] hover:bg-[#d8ff57] rounded-full border border-teal-700"
							>
								<MagnifyingGlass
									size={14}
									weight="bold"
								/>
							</button>
						</form>
					</div>

				</div>
			</div>
		</>
	)
}

export default Navbar
