import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Footer = () => {
  return (
    <div id='contact' className="flex flex-col bg-gradient-to-r from-gray-700 via-gray-900 to-black h-36 mt-10 pt-10 justify-between  w-full">
    <span className='flex text-white text-5xl justify-center gap-6'>
        <a href='https://www.linkedin.com/in/jeremiasoviedo' target='_blank'><FaLinkedin/></a>
        <a href='https://www.github.com/jeremiasoviedo' target='_blank'><FaGithub/></a>
        <a href='https://jeremiasoviedo.github.io' target='_blank'><FaUser/></a>


    </span>
      <span className="font-sans text-center text-white">Jeremias Oviedo 2023 @ Notecraft</span>
    </div>
  );
};

export default Footer;
