import React from "react";
import '../index.css';
import FileIcon from "../assets/document-sharp-icon.png";
import CancelIcon from "../assets/close-circle-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { removeFile } from "../features/counter/counterSlice";

const FileItem = () => {
    const file = useSelector((state) => state.counter.fileMeta);
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
        <div className="bg-white p-4 my-4 rounded-xl">
        <div className="my-4 flex justify-between content-center ">
            <h2 className="font-medium text-xl">Upload Details</h2>
            <p className="text-gray-500 text-base">Total: {formatFileSize(file?.size)}</p>
        </div>
        <div className={`bg-gray-200 flex p-2  gap-4 items-center group relative rounded-md `}>
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md">
                <img src={FileIcon} alt="File icon" />
            </div>
            <div className="min-w-0 flex-grow ">
                <p className="block font-medium text-nowrap">{file?.name}</p>
                <p className="text-gray-600 text-xs">{formatFileSize(file?.size)}</p>
            </div>
            <button onClick={removeBtn} className={`w-10 h-10 flex items-center justify-center ${status === "success"
                ? 'hover:text-red-500 hover:bg-red-50 transition-colors'
                : 'opacity-50 cursor-not-allowed'}`}>
                <img src={CancelIcon} alt="Cancel icon" />
            </button>
        </div >
        <div className="my-4 flex justify-between content-center ">
        <p className="text-gray-500 text-base">Available for: 3 days</p>
            <button className=" bg-blue-600 px-4 py-2 rounded-md">Upload Files</button>
        </div>
        </div>
    )
}

export default FileItem;