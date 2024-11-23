import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { LogoImg } from "../images";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-4 inset-x-0 mx-auto border-[#27272a] text-white border backdrop-blur-md shadow-lg rounded-full px-6 py-3 flex items-center justify-between w-full max-w-[90%] sm:max-w-[700px] z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Link className="flex items-center gap-3" to="/">
        <img src={LogoImg} alt="LogoImage" className="w-6 h-6 object-contain" />
        <h1 className="tracking-wide font-bold font-mono text-sm whitespace-nowrap">
          Abbii / UI
        </h1>
      </Link>
      <div className="md:flex hidden space-x-4">
        <Link
          to="/docs"
          className="text-white/70 hover:text-white transition tracking-wide font-bold font-mono text-sm"
        >
          Docs
        </Link>
        <Link
          to="/components"
          className="text-white/70 hover:text-white transition tracking-wide font-bold font-mono text-sm"
        >
          Components
        </Link>
        <Link
          to="/templates"
          className="text-white/70 hover:text-white transition tracking-wide font-bold font-mono text-sm"
        >
          Templates
        </Link>
      </div>
      <div className="flex md:hidden">
        <button className="text-white/70 hover:text-white transition tracking-wide font-bold font-mono">
        <MdMenu size={25}/>
        </button>

      </div>
    </motion.nav>
  );
};

export default Navbar;
