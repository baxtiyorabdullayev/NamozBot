import React from "react";
import { BiSolidHome } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="p-3  bg-[#29918ab7]  flex justify-between items-center text-[#f6f5f9] fixed top-0 left-0 w-full">
      <p className="text-xl">Косонсой намоз вақтлари</p>
      <p className="text-3xl ">
        <Link to="/">
          <BiSolidHome />
        </Link>
      </p>
    </div>
  );
}

export default Navbar;
