import React, { useState, useEffect } from "react";
import TransferFileItem from "../../compunents/TransferFileItem";
import UploadArea from "../../compunents/UploadArea";
import { useNavigate } from "react-router-dom";
import SentTransfer from "../../compunents/sentTransfer";
import ReceivedTransfer from "../../compunents/ReceivedTransfer";
import axios from "../../axios-order";

const Transfer = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("sent");
  

    return (
        <div className="flex w-full h-full">
            <div onClick={() => navigate('/')}  className="hidden md:block w-1/3 h-full bg-blue-200 z-40 flex flex-col items-center justify-center pt-20">
                <h1 className="text-gray-800 text-7xl font-bold tracking-tight text-center leading-tight">Send To <br/>Files</h1>
                <div className="mt-10 w-4/5  mx-auto">
                    <UploadArea />
                </div>
            </div>
            <div className="w-2/3 h-screen z-60 bg-white p-6">
                {/* <div className="flex justify-end">
                    <button className="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div> */}
                <div className="flex justify-start mb-4 gap-2">
                    <button onClick={()  => setActiveTab("sent")} 
                        className={`px-4 py-2 border-b-2 transparent font-medium ${  
                            activeTab === "sent"
                                ? "border-blue-600 text-blue-700"
                                : "border-transparent text-gray-500 hover:border-blue-600 hover:text-blue-600" }`} >
                        Sent
                    </button>
                    <button onClick={() => setActiveTab("received")}
                        className={`px-4 py-2 font-medium border-b-2 transition 
                                ${
                                    activeTab === "received"
                                    ? "border-blue-600 text-blue-600"
                                    : "border-transparent text-gray-500 hover:border-blue-600  hover:text-blue-600"
                                }`}>  
                        Received
                    </button>
                </div>
                <div className="mb-4 relative">
                    <input
                        type="text"
                        placeholder="title,file name,or email"
                        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                {activeTab === "sent" && <SentTransfer/>}
                {activeTab === "received" && <ReceivedTransfer/>}


                </div>
                </div>
              
    );
} 

export default Transfer;