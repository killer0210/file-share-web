import React from "react";
import "../index.css";

const Header = () => {
    return (
        <header className="PrText py-2 px-4 flex place-content-between items-center bg-blue-50 ">
            <h3 className="font-bold">FileShare</h3>
            <ul className="flex items-center font-medium gap-2">
                <li className="h-full px-4 py-2  PrText btn-hover transition duration-300 ">Help</li>
                <li className="h-full px-4 py-2  PrText btn-hover transition duration-300">About</li>
            </ul>
        </header>
    )
}

export default Header;