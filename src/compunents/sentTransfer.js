import react from "react";
import TransferFileItem from "./TransferFileItem";

const SentTransfer = () =>{
    return (
        <div>
            <div className="mb-4 text-gray-500 text-sm">
                May 30
            </div>
            <TransferFileItem fileName="Name" date="12 may 2025" size="11.3KB (1 file)" status="Not yet downloaded -Expired" />
            <TransferFileItem fileName="Name" date="12 may 2025" size="11.3KB (1 file)" status="Not yet downloaded -Expired" />
            <TransferFileItem fileName="Name" date="12 may 2025" size="11.3KB (1 file)" status="Not yet downloaded -Expired" />
        </div>
    );
}

export default SentTransfer;