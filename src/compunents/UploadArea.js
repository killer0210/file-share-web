import React, { useCallback, useState } from "react";
import FileIcon from "../assets/cloud-upload.svg";

import Spinner from "./Spinner";

import { useDispatch, useSelector } from "react-redux";
import { uploadStart, uploadSuccess, uploadFailure } from "../features/counter/counterSlice";

const UploadArea = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.counter.status);
    const maxFileSize = 2 * 1024 * 1024 * 1024;
    const formatFileSize = (bytes) => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }
    
    const [selectedFile, setSelectedFile] = useState(null);

    const onFileInputChange = useCallback((e) => {
        const file = e.target.files[0];
        if (!file) return;

        dispatch(uploadStart());
        try {
            if (file.size > maxFileSize) {
                alert("Файлын хэмжээ 2GB-ээс их байна.");
                return;
            }
            setSelectedFile(file);
            console.log(file);

            const fileMeta = {
                name: file.name,
                size: formatFileSize(file.size),
                type: file.type,
                timestamp: Date.now()
            };

            dispatch(uploadSuccess(fileMeta));
        } catch (err) {
            dispatch(uploadFailure("Файл оруулахад алдаа гарлаа."));
        }

        e.target.value = "";
    }, [dispatch]);




 

    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="p-8 border-2 border-dashed bg-white flex flex-col items-center justify-center text-center gap-4 rounded-lg cursor-pointer shadow-xl transition-all duration-200 ease-in-out">
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={onFileInputChange}
                    disabled={status === 'uploading'}
                />
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gray-100">
                    <img src={FileIcon} alt="Upload" className="w-8 h-8" />
                </div>
                <div>
                <h2 className="hidden md:block text-xl text-gray-800 mb-2">Файлаа энд чирч оруулна уу</h2>
                <p className="hidden md:block text-sm text-gray-500 mb-4">эсвэл</p>

                    {status === "uploading" ? (
                        <div className="flex items-center justify-center">
                            <Spinner />
                        </div>
                    ) : (
                        <label
                            htmlFor="fileInput"
                            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg cursor-pointer hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                        >
                            Файл Сонгох
                        </label>
                    )}
                </div>
                <p className="text-xs text-gray-400 mt-2">Файлын дээд хэмжээ: 2GB</p>
            </div>

           
        </div>
    );
};

export default UploadArea;