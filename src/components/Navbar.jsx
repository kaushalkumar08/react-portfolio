import logo from "../assets/images/logo/logo.png"

import ln from "../assets/images/icons/ln.png";
import gth from "../assets/images/icons/gth.png";
import mail from "../assets/images/icons/mail.png";

const Navbar = () => {
  return (
  <nav className=" mb-10 flex items-center justify-between py-6 ">
    <div className="flex flex-shrink-0 item-center ">
        <img src={logo} alt="logo" className="mx-9 w-12 h-12 w-auto"/>
    </div>
    <div className="m-8 flex items-center justify-center gap-6 text-2xl">
        <a href="https://www.linkedin.com/in/kaushal-k-90927222a"  target="_blank" rel="noopener noreferrer" ><img src={ln} alt="LinkedIn Icon" className="h-6 w-auto" /> </a>
        <a href="https://github.com/kaushalkumar08"  target="_blank" rel="noopener noreferrer" ><img src={gth} alt="Github Icon" className="h-6 w-auto" />  </a>
        <a href="mailto:kaushal01adv@gmail.com"><img src={mail} alt="mail Icon" className="h-6 w-auto filter invert" /> </a>
    </div>
    </nav>
  );
};

export default Navbar;

