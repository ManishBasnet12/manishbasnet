import "../../../src/app/(homepage)/globals.css";

import Image from "next/image";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#030C1D] p-5">
      <div className="flex w-[200px] justify-between items-center">
        <Image className="w-[35px] h-[35px]" src="/loadingmainlogo.png" width={30} height={30} alt="logo" />
        <IoMdMenu className="text-[#1E716B] text-[28px]" />
      </div>
      <div className=" w-[30px] h-[30px] text-[24px] text-white">
        <FaUserCircle />
      </div>
    </div>
  );
};

export default Navbar;
