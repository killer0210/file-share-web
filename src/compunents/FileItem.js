import React from "react";
import '../index.css';
import FileIcon from "../assets/document-sharp-icon.png";
import CancelIcon from "../assets/close-circle-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { removeFile } from "../features/counter/counterSlice";

const FileItem = () => {
    const file = useSelector((state) => state.counter.file);
    const dispatch = useDispatch();
    const status = useSelector((state) => state.counter.status);


    const formatFileSize = (bytes) => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }

    const removeBtn = () => {
        dispatch(removeFile());
    };

    return (
        <div  className={`bg-red-500 flex p-2 mt-6 gap-4 items-center group relative `}>
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md">
                <img src={FileIcon} alt="File icon" />
            </div>
            <div className="min-w-0 flex-grow">
                <p className="block text-nowrap">{file?.name}</p>
                <p>{formatFileSize(file?.size)}</p>
            </div>
            <button onClick={removeBtn} className={`w-10 h-10 flex items-center justify-center ${status === "uploading"
                ? 'hover:text-red-500 hover:bg-red-50 transition-colors'
                : 'opacity-50 cursor-not-allowed'}`}>
                <img src={CancelIcon} alt="Cancel icon" />
            </button>
        </div >
    )
}

export default FileItem;