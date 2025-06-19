import React from "react";
import '../index.css';
import FileIcon from "../assets/document-sharp-icon.png";
import CancelIcon from "../assets/close-circle-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { removeFile } from "../features/counter/counterSlice";
import { useNavigate } from "react-router-dom";

const FileItem = () => {
    const file = useSelector((state) => state.counter.fileMeta);
    const dispatch = useDispatch();
    const status = useSelector((state) => state.counter.status);

    // const formatFileSize = (bytes) => {
    //     if (bytes < 1024) return `${bytes} B`;
    //     if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    //     return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    // }

    const removeBtn = () => {
        dispatch(removeFile());
    };
    const navigate = useNavigate();

    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="bg-white p-8 my-4 rounded-lg mx-auto overflow-hidden shadow-xl">
                <div className="my-4 flex justify-between items-center ">
                    <h2 className="font-medium text-xl">Файлын мэдээлэл</h2>
                    <p className="text-gray-500 text-base">Нийт: {file?.size}</p>
                </div>
                <div className={`bg-gray-200 flex p-2  gap-4 items-center group relative rounded-md `}>
                    <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md">
                        <img src={FileIcon} alt="Файлын зураг" />
                    </div>
                    <div className="min-w-0 flex-grow ">
                        <p className="block font-medium truncate overflow-hidden">{file?.name}</p>
                        <p className="text-gray-600 text-xs">{file?.size}</p>
                    </div>
                    <button onClick={removeBtn} className={`w-10 h-10 flex items-center justify-center ${status === "success"
                        ? 'hover:text-red-500 hover:bg-red-50 transition-colors'
                        : 'opacity-50 cursor-not-allowed'}`}>
                        <img src={CancelIcon} alt="Цуцлах товч" />
                    </button>
                </div >
                <div className="my-4 flex justify-between content-center ">
                <p className="text-gray-500 text-base">Хүчинтэй хугацаа: 3 өдөр</p>
                    <button onClick={() => navigate('/fileUpload')} className=" bg-blue-600 px-4 py-2 rounded-md text-white">Үргэлжлүүлэх</button>
                </div>
            </div>
        </div>
    )
}

export default FileItem;