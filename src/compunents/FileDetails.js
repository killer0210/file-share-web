import React from "react";
import "../index.css";
import FileItem from "./FileItem";
import { useDispatch, useSelector } from "react-redux";

const FileDetails = () => {
    const status = useSelector((state) => state.counter.status);
    const file = useSelector((state) => state.counter.file);
    
    return (
        <div>
              {status === 'uploading' && <FileItem />}
        </div>
    )
}

export default FileDetails