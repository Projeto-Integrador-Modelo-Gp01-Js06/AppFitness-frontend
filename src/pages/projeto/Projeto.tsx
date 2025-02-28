import { useState } from "react";
import { motion } from "framer-motion";

function Projeto() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleImageClick = (type: string) => {
    setSelected(type);
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.8 },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: { opacity: 0, transition: { duration: 1 } },
        visible: { opacity: 1, transition: { duration: 1 } },
      }}
      className="flex flex-col justify-center items-center w-full h-screen relative p-10"
    >
      <img
        src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victorfreitas-841130.jpg&fm=jpg"
        alt="GIF de fundo"
        className="absolute inset-0 object-cover z-[-1] h-full w-full"
      />
      <div className="bg-[rgba(0,0,0,0.88)]  p-5 rounded-lg shadow-lg mb-10 text-center font-['Roboto_Condensed']">
        {" "}
        <h1 className="text-5xl text-lime-400 font-bold mb-4 font-['Roboto_Condensed']">
          Inicie sua transformação hoje mesmo!
        </h1>
        <p className="text-2xl text-lime-400 font-['Roboto_Condensed']">
          Prepare-se para sua jornada de transformação! Cada passo conta na
          busca pelo seu melhor. Explore nossas atividades e dê início a uma
          trajetória que vai levar você mais longe a cada conquista.
        </p>
      </div>

      <img
        src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victorfreitas-841130.jpg&fm=jpg"
        alt="GIF de fundo"
        className="absolute inset-0 object-cover z-[-1] h-full w-full"
      />
      <div className="flex flex-row justify-center items-center gap-10 relative">
        {" "}
        <div className="flex flex-col items-center">
          <p className="text-lime-400 text-6xl my-2 font-extrabold font-['Roboto_Condensed']">
            CARDIO
          </p>
          <div className="relative">
            <img
              src="https://ik.imagekit.io/bikiirafb/rh2?updatedAt=1740511550269"
              alt="Cardio"
              className="rounded-2xl w-100 h-80 object-cover"
              onClick={() => handleImageClick("CARDIO")}
            />
            {selected === "CARDIO" && (
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-2xl"
                initial="hidden"
                animate="visible"
                variants={overlayVariants}
                transition={{ duration: 0.5 }}
              >
                <motion.p
                  className="p-2 text-lime-400 text-xl font-bold flex text-center font-['Roboto_Condensed']"
                  initial="hidden"
                  animate="visible"
                  variants={descriptionVariants}
                  transition={{ duration: 0.5 }}
                >
                  Fortaleça sua jornada com treinos de musculação
                  personalizados, focados em resistência e definição. Supere
                  seus limites e alcance seus objetivos de forma eficiente.{" "}
                </motion.p>
              </motion.div>
            )}
          </div>
        </div>{" "}
        <div className="flex flex-col items-center">
          <p className="text-lime-400 text-6xl my-2 font-extrabold font-['Roboto_Condensed']">
            MUSCULAÇÃO
          </p>
          <div className="relative">
            <img
              src="https://ik.imagekit.io/bikiirafb/rh2?updatedAt=1740511550269"
              alt="Musculação"
              className="rounded-2xl w-100 h-80 object-cover"
              onClick={() => handleImageClick("MUSCULAÇÃO")}
            />
            {selected === "MUSCULAÇÃO" && (
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-2xl"
                initial="hidden"
                animate="visible"
                variants={overlayVariants}
                transition={{ duration: 0.5 }}
              >
                <motion.p
                  className="p-2 text-lime-400 text-xl font-bold flex text-center font-['Roboto_Condensed']"
                  initial="hidden"
                  animate="visible"
                  variants={descriptionVariants}
                  transition={{ duration: 0.5 }}
                >
                  Fortaleça sua jornada com treinos de musculação
                  personalizados, focados em resistência e definição. Supere
                  seus limites e alcance seus objetivos de forma eficiente.{" "}
                </motion.p>
              </motion.div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lime-400 text-6xl my-2 font-extrabold font-['Roboto_Condensed']">
            COLETIVAS
          </p>
          <div className="relative">
            <img
              src="https://ik.imagekit.io/bikiirafb/rh2?updatedAt=1740511550269"
              alt="Coletivas"
              className="rounded-2xl w-100 h-80 object-cover"
              onClick={() => handleImageClick("COLETIVAS")}
            />
            {selected === "COLETIVAS" && (
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-2xl"
                initial="hidden"
                animate="visible"
                variants={overlayVariants}
                transition={{ duration: 0.5 }}
              >
                <motion.p
                  className="p-2 text-lime-400 text-xl font-bold flex text-center font-['Roboto_Condensed']"
                  initial="hidden"
                  animate="visible"
                  variants={descriptionVariants}
                  transition={{ duration: 0.5 }}
                >
                  Desafie-se e se divirta nas aulas coletivas! Yoga, pilates,
                  dança e mais, para todos os níveis, em um ambiente motivador e
                  dinâmico.{" "}
                </motion.p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projeto;
