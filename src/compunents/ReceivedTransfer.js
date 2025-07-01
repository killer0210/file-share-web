import react from "react";
import TransferFileItem from "./TransferFileItem";
import { useSelector } from "react-redux";

const ReceivedTransfer = () =>{

    const order = useSelector((state) => state.counter.orders);
    // const toEmail = "saihants1@gmail.com";
    const toEmail = useSelector((state) => state.counter.auth.user);
    const sent = (order || []).filter(order => order.to === toEmail);

    return( <div>
         {sent.map((order, i) => {
                const date = new Date(order.file?.timestamp);
                const formattedDate = date.toLocaleString();

                return (
                    <TransferFileItem
                        key={i}
                        fileName={order.title}
                        date={formattedDate}
                        size={order.file?.size}
                        status={order.file?.type}
                        downLink={order.file?.download_url}
                    />
                );
            })}
    </div>);
}

export default ReceivedTransfer;