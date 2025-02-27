import {
  ArrowCircleRight,
  Envelope,
  GithubLogo,
  InstagramLogo,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

function Home() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="-my-10 relative h-screen w-auto">
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGJvdTNpZGFhMzJscHd5cnkzcW5ia2NmN2FlZjF3bGd6ZDNiZHdzdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d2ZfqZY5eSCR0rza/giphy.gif"
          alt="GIF de fundo"
          className="absolute inset-0 object-cover z-[-1] h-full w-full"
        />
        <div className="items-start flex pt-20">
          <div className="flex justify-center items-start w-full h-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {" "}
              <div className="w-40 h-9 bg-lime-400 skew-x-24 m-5"></div>
            </motion.div>
            <div className="flex flex-col items-center mx-4">
              <motion.div
                className="text-lime-400 text-6xl font-black italic font-['Roboto_Condensed']"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                FIT
              </motion.div>
              <motion.div
                className="text-lime-400 text-6xl font-black italic mb-2 font-['Roboto_Condensed']"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                JOURNEY
              </motion.div>
              <div className="items-center flex flex-col">
                <motion.div
                  className="text-lime-400 text-1xl font-semibold italic font-[Roboto Condensed]"
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  PERSONAL TRAINER
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {" "}
              <div className="w-40 h-9 bg-lime-400 skew-x-24 m-5"></div>
            </motion.div>{" "}
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-end justify-center my-4 h-50 mx-3"
        >
          <InstagramLogo size={32} className="text-lime-400" />
          <GithubLogo size={32} className="text-lime-400" />
          <Envelope size={32} className="text-lime-400" />
        </motion.div>

        <div className="absolute mx-10 -my-20">
          <motion.p
            className="text-lime-400 text-5xl font-semibold italic font-['Roboto_Condensed']"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            SUA JORNADA FITNESS
          </motion.p>
          <motion.p
            className="mx-50 text-lime-400 text-5xl font-semibold italic font-['Roboto_Condensed']"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            COMEÇA AQUI
          </motion.p>
          <motion.div
            className="w-45 h-9 bg-lime-400 skew-x-24 mx-70 mt-5 rounded-2xl hover:scale-110"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5, delay: 2.0 }}
          >
            <a
              href="#"
              className="w-full h-full flex items-center justify-center text-black hover:text-white font-semibold gap-2"
            >
             INICIAR JORNADA
              <ArrowCircleRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Home;
