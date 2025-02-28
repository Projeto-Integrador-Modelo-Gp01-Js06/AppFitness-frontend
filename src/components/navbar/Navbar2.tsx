
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { Link } from "react-router-dom"

function Navbar() {

	return (
		<>
			<div className="flex justify-center w-full py-4 text-black bg-[#d8ff57]">
	<div className="container flex items-center justify-between ms-8 text-xl">
		<div className="flex items-center gap-8 py-4 ps-8">
			Inicio
			<Link to="" className="hover:underline">
				Serviços
			</Link>
			<Link to="" className="hover:underline">
				Sobre
			</Link>
			<Link to="" className="hover:underline">
				Contato
			</Link>	
		</div>

					<div className="relative flex items-center justify-center w-1/2 text-white">
						<form 
							className="flex items-center justify-center w-full"
						>
							<input
								className="w-6/12 px-3 py-2 bg-[#d8ff57] rounded-full h-8 focus:outline-none border border-black"
								type="search"
								placeholder="Pesquisar"
								id="busca"
								name="busca"
								required
                                
							/>
							<button
								type="submit"
								className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-black bg-[#d8ff57] hover:bg-black rounded-full border border-black"
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
