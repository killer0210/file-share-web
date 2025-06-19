import React from "react";
import { useDispatch, useSelector } from "react-redux";

const FileUpload = () => {
    const file = useSelector((state) => state.counter.fileMeta);
    const parts = file.name.split('.');
    const extension = parts.length > 1 ? parts.pop() : null;

    return (
        <div className="flex flex-col bg-white p-4 rounded-lg gap-2">
            <div className="bg-gray-100 rounded-md p-2">
                <p>{file?.name}</p>
                <p>{file?.size} - {extension}</p>
            </div>
            <input type="email" placeholder="Email to" className="w-72 border-b-2 border-gray-500 p-2 hover:border-blue-600 focus:placeholder-transparent placeholder-gray-500 focus:outline-none"/>
            
            <input type="email" placeholder="Your email" className="w-72 border-b-2 border-gray-500 p-2 hover:border-blue-600 focus:placeholder-transparent placeholder-gray-500 focus:outline-none"/>
            <input type="email" placeholder="Title" className="w-72 border-b-2 border-gray-500 p-2 hover:border-blue-600 focus:placeholder-transparent placeholder-gray-500 focus:outline-none"/>
            <input type="email" placeholder="Message" className="w-72 border-b-2 border-gray-500 p-2 hover:border-blue-600 focus:placeholder-transparent placeholder-gray-500 focus:outline-none"/>
            <button className="bg-blue-600 text-white py-2 w-full cursor-pointer hover:bg-blue-500 rounded-lg" >Transfer</button>
        </div>
        )
}

export default FileUpload