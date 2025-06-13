import React from "react";
import "../index.css";
import AboutIcon from "../assets/alert-circle-outline.svg"
import ProIcon from "../assets/person-circle.svg"

const Header = () => {
    return (
        <header className="PrText py-4 px-4  bg-blue-50 ">
            <div className="max-w-7xl flex place-content-between items-center mx-auto">
                <h1 className="font-bold text-2xl font-medium">FileShare</h1>
                <ul className="flex items-center font-medium gap-2 ">
                    <li className="btn-hover p-2 rounded cursor-pointer">
                    <img src={AboutIcon} alt="Upload" className=" hover:brightness-0 hover:invert transition duration-300 " />
                    
                    </li>
                    <li className=" h-full btn-hover p-2 rounded cursor-pointer  "> <img src={ProIcon} alt="Upload" className="hover:brightness-0 hover:invert transition duration-300"  /></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;