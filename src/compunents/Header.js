import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

import AboutIcon from "../assets/information-circle-outline.svg";
import AboutIconWh from "../assets/information-circle-outline-white.svg";
import ProIcon from "../assets/person-circle-outline.svg";
import ProIconWh from "../assets/person-circle-outline-white.svg";
import RepeatIcon from "../assets/repeat-outline.svg";
import RepeatIconWh from "../assets/repeat-outline-white.svg";
import EnterIcon from "../assets/enter-outline.svg";
import EnterIconWh from "../assets/enter-outline-white.svg";
import PersonAddIcon from "../assets/person-add-outline.svg";
import PersonAddIconWh from "../assets/person-add-outline-white.svg";


const Header = () => {
    return (
        <header className="PrText py-4 px-4  bg-blue-50 ">
            <div className="max-w-7xl flex place-content-between items-center mx-auto">
                <h1 className="font-bold text-2xl font-medium">FileShare</h1>
                <ul className="flex items-center font-medium gap-2 ">
                <li className="group btn-hover p-2 rounded cursor-pointer w-10 h-10 flex items-center justify-center relative">
                    <Link to="/help" className="w-full h-full flex items-center justify-center relative">
                    <img
                        src={AboutIcon}
                        alt="Upload"
                        className="w-6 h-6 absolute  group-hover:opacity-0 transition duration-300"
                    />
                    <img
                        src={AboutIconWh}
                        alt="Upload White"
                        className="w-6 h-6 absolute opacity-0 group-hover:opacity-100 transition duration-300"
                    />
                    </Link>
                    </li>
                <li className="group relative btn-hover p-2 rounded cursor-pointer w-10 h-10 flex items-center justify-center">
                    <Link to="/transfer" className="w-full h-full flex items-center justify-center relative">
                        <img
                            src={RepeatIcon}
                            alt="Upload"
                            className="w-6 h-6 absolute  group-hover:opacity-0 transition duration-300"
                        />
                        <img
                            src={RepeatIconWh}
                            alt="Upload white"
                            className="w-6 h-6 absolute opacity-0 group-hover:opacity-100 transition duration-300"
                        />
                        </Link>
                    </li>
                <li className="group relative btn-hover p-2 rounded cursor-pointer w-10 h-10 flex items-center justify-center">
                    <Link to="/" className="w-full h-full flex items-center justify-center relative">
                        <img
                            src={ProIcon}
                            alt="Upload"
                            className="w-6 h-6 absolute  group-hover:opacity-0 transition duration-300"
                        />
                        <img
                            src={ProIconWh}
                            alt="Upload white"
                            className="w-6 h-6 absolute opacity-0 group-hover:opacity-100 transition duration-300"
                        />
                        </Link>
                    </li>
                <li className="group relative btn-hover p-2 rounded cursor-pointer w-10 h-10 flex items-center justify-center">
                    <Link to="/login" className="w-full h-full flex items-center justify-center relative">
                        <img
                            src={EnterIcon}
                            alt="Upload"
                            className="w-6 h-6 absolute  group-hover:opacity-0 transition duration-300"
                        />
                        <img
                            src={EnterIconWh}
                            alt="Upload white"
                            className="w-6 h-6 absolute  opacity-0 group-hover:opacity-100 transition duration-300"
                        />
                    </Link>
                    </li>
                <li className="group relative btn-hover p-2 rounded cursor-pointer w-10 h-10 flex items-center justify-center">
                    <Link to="/signIn" className="w-full h-full flex items-center justify-center relative">
                        <img
                            src={PersonAddIcon}
                            alt="Upload"
                            className="w-6 h-6 absolute  group-hover:opacity-0 transition duration-300"
                        />
                        <img
                            src={PersonAddIconWh}
                            alt="Upload white"
                            className="w-6 h-6 absolute opacity-0 group-hover:opacity-100 transition duration-300"
                        />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;