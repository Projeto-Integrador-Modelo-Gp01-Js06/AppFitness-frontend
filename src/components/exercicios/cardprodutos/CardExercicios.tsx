import { Pencil, Trash } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import Exercicio from "../../models/Exercicio"

interface CardExercicioProps {
    exercicio: Exercicio
}

function CardExercicios({ exercicio }: CardExercicioProps) {
    return (
        <div className="flex flex-col justify-between my-10 overflow-hidden bg-white rounded-lg">
            <div className="flex items-end justify-end pt-2 pr-2">
                <Link to={`/editarexercicio/${exercicio.id}`}>
                    <Pencil
                        size={24}
                        className="mr-1 hover:fill-teal-800"
                    />
                </Link>

                <Link to={`/deletarexercicio/${exercicio.id}`}>
                    <Trash
                        size={24}
                        className="mr-1 hover:fill-red-700"
                    />
                </Link>
            </div>

            <div className="py-4">
                <img
                    src={exercicio.midia}
                    className="mx-auto mt-1 h-44 max-w-75"
                    alt={exercicio.nome}
                />

                <div className="p-4">
                    <p className="text-sm text-center uppercase">
                        {exercicio.nome}
                    </p>
                    <p className="text-sm text-center ">
                        Descrição: {exercicio.descricao}
                    </p>
                    <p className="text-sm text-center ">
                        Tempo de Exercício: {exercicio.tempo}
                    </p>
                    <p className="text-sm text-center ">
                        Série: {exercicio.serie}
                    </p>
                    <p className="text-sm text-center ">
                        Repetições do Exercício: {exercicio.repeticoes}
                    </p>
                    <p className="text-sm text-center ">
                        Peso: {exercicio.peso}
                    </p>
                    <p className="text-sm text-center ">
                        Tempo de descanso: {exercicio.descanso}
                    </p>
                    <p className="text-sm text-center ">
                        Midia: {exercicio.midia}
                    </p>
                    <p className="text-sm text-center ">
                    Data: {new Date(exercicio.data).toLocaleDateString()}
                    </p>
                    <p className="text-xl text-center font-bold">
                        Categoria: {exercicio.categoria?.nome}
                    </p>

                    
                </div>
            </div>
            <div className="flex items-center justify-center w-full text-gray-950 bg-lime-300 py-10 gap-2">
                <Link to={`/editarexercicio/${exercicio.id}`}>
                        <Pencil size={36} className="#ffffff " />
                </Link>

                <Link to={`/deletarexercicio/${exercicio.id}`} >
                        <Trash size={36} color="#ffffff" />
                </Link>
            </div>
        </div>
    )
}

export default CardExercicios