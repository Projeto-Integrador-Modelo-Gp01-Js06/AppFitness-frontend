import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className="font-['Roboto_Condensed'] bottom-0 left-0 w-full text-white bg-black">
  <div className="flex flex-col items-center py-4">
    <p className="text-xl font-bold">Fit Journey</p>

    <div className="flex gap-2">
      <a href="" target="_blank" className="hover:text-[#d8ff57] transition duration-300">
        <LinkedinLogo size={40} weight="light" />
      </a>
      <a href="" target="_blank" className="hover:text-[#d8ff57] transition duration-300">
        <InstagramLogo size={40} weight="light" />
      </a>
      <a href="" target="_blank" className="hover:text-[#d8ff57] transition duration-300">
        <FacebookLogo size={40} weight="light" />
      </a>
    </div>

    <p className="text-xl font-light">Copyright: {data}</p>
  </div>
</div>
    </>
  );
}

export default Footer;
