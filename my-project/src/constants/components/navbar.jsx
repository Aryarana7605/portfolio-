import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Navbar = () =>{
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex items-center flex-shrink-0">
          <h2 className="font-bold mx-2 w-10 text-5xl">AR</h2>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
         <FaLinkedin/>
          <FaGithub/>
         <FaInstagram/>
        </div>
    </nav>
}

export default Navbar;
