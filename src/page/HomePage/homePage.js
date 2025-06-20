import React, { useState } from "react";
import "../../index.css";
import bcImage from '../../assets/istockphoto-1460638750-612x612.png'
import UploadArea from "../../compunents/UploadArea";
import FileItem from "../../compunents/FileItem";
import { useDispatch, useSelector } from "react-redux";
import FileUpload from "../fileUpload/fileUpload";

const HomePage = () => {

    const status = useSelector((state) => state.counter.status);
   
    
    const file = useSelector((state) => state.counter.file);


   
    return (

        
        <div className="container mx-auto flex justify-center ">
            <div className="w-full max-w-2xl ">
                <UploadArea
                />
                {status === 'success' && <FileItem />}

            </div>
          
        </div>
    )
}

export default HomePage;