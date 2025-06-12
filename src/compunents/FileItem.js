import React from "react";
import '../index.css';
import FileIcon from "../assets/document-sharp-icon.png";
import CancelIcon from "../assets/close-circle-icon.png";

const FileItem = () => {
    return (
        <div className="bg-red-500 flex p-2 mt-6 gap-4 items-center group relative">
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md">
                <img src={FileIcon} alt="File icon" />
            </div>
            <div className="min-w-0 flex-grow">
                <p>.gitignore</p>
                <p>258 B</p>
            </div>
            <button className="w-10 h-10 flex items-center justify-center">
                <img src={CancelIcon} alt="Cancel icon" />
            </button>
        </div>
    )
}

export default FileItem;