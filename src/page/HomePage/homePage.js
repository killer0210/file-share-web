import React, { useState } from "react";
import "../../index.css";
import bcImage from '../../assets/istockphoto-1460638750-612x612.png'
import UploadArea from "../../compunents/UploadArea";
import FileDetails from "../../compunents/FileDetails";

const HomePage = () => {
    const handleFilesAdded = (files) => {
        console.log('Files added:', files);
    };

    return (
        <div className="container mx-auto justify-items-center ">
            <div className="w-full max-w-2xl">
                <UploadArea
                    onFilesAdded={handleFilesAdded}
                />

                <FileDetails />
            </div>
        </div>
    )
}

export default HomePage;