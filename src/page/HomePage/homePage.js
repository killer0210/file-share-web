import React, { useState } from "react";
import "../../index.css";
import bcImage from '../../assets/istockphoto-1460638750-612x612.png'
import UploadArea from "../../compunents/UploadArea";
import FileDetails from "../../compunents/FileDetails";

const HomePage = () => {
    const [files, setFiles] = useState([]);
    const [status, setStatus] = useState('idle');


    const handleFilesAdded = (newFiles) => {
        console.log(newFiles);
        // const fileWithPreview = newFiles.map((file) => ({
        //     file: file,
        //id: generateFileId(),
        // preview: URL.createObjectURL(file)
        // }));

        // setFiles(fileWithPreview);
        setFiles(newFiles);
    }

    return (
        <div className="w-full max-w-2xl my-auto">
            <UploadArea
                onFilesAdded={handleFilesAdded}
                disabled={status === 'uploading'}
            />

            <FileDetails />
        </div>
    )
}

export default HomePage;