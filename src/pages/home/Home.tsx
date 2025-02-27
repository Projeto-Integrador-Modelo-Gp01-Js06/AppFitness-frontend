import { Envelope, GithubLogo, InstagramLogo } from "@phosphor-icons/react";

function Home() {
  return (
    <>
      <div className="-my-10 relative h-screen w-auto">
        {" "}
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGJvdTNpZGFhMzJscHd5cnkzcW5ia2NmN2FlZjF3bGd6ZDNiZHdzdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d2ZfqZY5eSCR0rza/giphy.gif"
          alt="GIF de fundo"
          className="absolute inset-0 object-cover z-[-1] h-full w-full"
        />
        <div className="items-start flex pt-20">
          <div className="flex justify-center items-start w-full h-full">
            <div className="w-40 h-9 bg-lime-400 skew-x-24 m-5"></div>
            <div className="flex flex-col items-center mx-4">
              <div className="text-lime-400 text-6xl font-black italic font-['Roboto_Condensed']">
                FIT
              </div>
              <div className="text-lime-400 text-6xl font-black italic mb-2 font-['Roboto_Condensed']">
                JOURNEY
              </div>
              <div className="items-center flex flex-col">
                <div className="text-lime-400 text-1xl font-semibold italic font-[Roboto Condensed]">
                  PERSONAL TRAINER
                </div>
              </div>
            </div>
            <div className="w-40 h-9 bg-lime-400 skew-x-24 m-5"></div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center my-4 h-50 mx-3">
          <InstagramLogo size={32} className="text-lime-400" />
          <GithubLogo size={32} className="text-lime-400" />
          <Envelope size={32} className="text-lime-400" />
        </div>
        <div className="absolute mx-10 -my-20">
          <p className="text-lime-400 text-5xl font-semibold italic font-['Roboto_Condensed']">
            {" "}
            SUA JORNADA FITNESS 
            
          </p>
          <p className="mx-50 text-lime-400 text-5xl font-semibold italic font-['Roboto_Condensed']">
            {" "}
            COMEÇA AQUI
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
