import React from "react";
import "../index.css";

const Header = () => {
    return (
        <header className="PrText py-4 px-4  bg-blue-50 ">
            <div className="max-w-7xl flex place-content-between items-center mx-auto">
                <h1 className="font-bold text-2xl font-medium ">FileShare</h1>
                <ul className="flex items-center font-medium gap-2">
                    <li className="h-full px-4 py-2  PrText btn-hover transition duration-300 ">Help</li>
                    <li className="h-full px-4 py-2  PrText btn-hover transition duration-300">About</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;