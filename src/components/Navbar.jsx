import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CONTACT } from "../constants";
const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10">
      <div className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            {/* <img className="mx-2 w-10" src={logo} alt="logo" srcset="" /> */}
        </div>
        <div className="mb-8 flex items-center justify-center gap-4 text-2xl">
            <a href={CONTACT.linkedin}><FaLinkedin /></a>
            <a href={CONTACT.github}><FaGithub /></a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;