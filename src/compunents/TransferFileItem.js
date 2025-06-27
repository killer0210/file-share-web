import React from "react";
import { Link } from "react-router-dom";

import LinkIcon from "../assets/link-2-outline.svg";
import LinkIconWh from "../assets/link-2-outline-white.svg";
import DownIcon from "../assets/arrow-down-outline.svg";
import DownIconWh from "../assets/arrow-down-outline-white.svg";

const TransferFileItem = ({ fileName, date, size, status,downLink  }) => {

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(downLink);
            alert(downLink);
        }catch (err){
            console.error("Хуулж чадсангүй:",err)
        }
    }

    return (
        <div className="flex flex-col md:flex-row gap-2 justify-between bg-white p-4 my-2 rounded-md border border-gray-200 shadow-md ">
            <div>
                <p className="font-bold text-xl">{fileName}</p>
                <p className="text-gray-600 text-sm">Sent {date} - {size} - {status}</p>
            </div>
            <ul className="flex items-center font-medium gap-2 ">
            <li onClick={handleCopy} className="group btn-hover p-2 rounded-md cursor-pointer  flex items-center justify-center relative">
            <div className="hidden md:block w-6 h-6 flex items-center justify-center relative">
                    <img
                        src={LinkIcon}
                        alt="link copy"
                        className=" w-6 h-6 absolute  group-hover:opacity-0 transition duration-300"
                    />
                    <img
                        src={LinkIconWh}
                        alt="link copy"
                        className=" w-6 h-6 absolute opacity-0 group-hover:opacity-100 transition duration-300"
                    />
                    </div>
                    <span className="block  text-center  md:hidden x-auto ">Линк хуулах</span>
                    </li>
            <li className="group btn-hover p-2 rounded-md cursor-pointer  flex items-center justify-center relative">
                    <a href={downLink} download className="w-full h-full flex  items-center justify-center relative">
                    <div className="hidden md:block w-6 h-6 flex items-center justify-center relative">
                    <img
                        src={DownIcon}
                        alt="download"
                        className=" w-6 h-6 absolute  group-hover:opacity-0 transition duration-300"
                    />
                    <img
                        src={DownIconWh} 
                        alt="download"
                        className=" w-6 h-6 absolute opacity-0 group-hover:opacity-100 transition duration-300"
                    />
                    </div>
                    <span className="block md:hidden text-center">Татах</span>
                    </a>
                    </li>
            </ul>
        </div>
    );
};

export default TransferFileItem; 