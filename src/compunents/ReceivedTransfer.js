import react from "react";
import TransferFileItem from "./TransferFileItem";

const ReceivedTransfer = () =>{
    return( <div>
        <TransferFileItem fileName="Name" date="12 may 2025" size="11.3KB (1 file)" status="Not yet downloaded -Expired" />
            <TransferFileItem fileName="Name" date="12 may 2025" size="11.3KB (1 file)" status="Not yet downloaded -Expired" />
            <TransferFileItem fileName="Name" date="12 may 2025" size="11.3KB (1 file)" status="Not yet downloaded -Expired" />
    </div>);
}

export default ReceivedTransfer;