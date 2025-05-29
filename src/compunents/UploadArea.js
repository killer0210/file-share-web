
import React, { useCallback, useState } from "react";
import FileIcon from "../assets/cloud-upload.svg";

const UploadArea = ({ onFilesAdded, disabled = false }) => {

    const onFileInputChange = useCallback((e) => {
        if (disabled || !e.target.files) return;
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            onFilesAdded(files);
            e.target.value = '';
        }
    }, [disabled, onFilesAdded]);


    return (
        <div className="p-8 border-2 border-dashed bg-white flex flex-col items-center justify-center text-center gap-4 rounded-lg cursor-pointer shadow-xl transition-all duration-200 ease-in-out ">
            <input type="file" id="fileInput" multiple
                className="hidden" onChange={onFileInputChange} disabled={disabled} />
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gray-100">

                <img src={FileIcon} alt="Upload" className="w-8 h-8" />
            </div>
            <div>
                <h2 className="text-xl text-gray-800 mb-2">Drag & Drop files here</h2>
                <p className="text-sm text-gray-500 mb-4">or</p>
                <label htmlFor="fileInput" className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-md ">Browse Files</label>
            </div>
            <p className="text-xs text-gray-400 mt-2">Maximum file size: 2GB</p>
        </div>
    )
}

export default UploadArea;