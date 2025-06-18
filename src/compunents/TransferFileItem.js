import React from "react";

const TransferFileItem = ({ fileName, date, size, status }) => {
    return (
        <div className="bg-white p-4 my-2 rounded-md border border-gray-200 shadow-md">
            <p className="font-bold text-xl">{fileName}</p>
            <p className="text-gray-600 text-sm">Sent {date} - {size} - {status}</p>
        </div>
    );
};

export default TransferFileItem; 