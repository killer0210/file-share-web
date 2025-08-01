import react from "react";
import TransferFileItem from "./TransferFileItem";
import { saveOrder } from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const SentTransfer = () =>{
    const order = useSelector((state) => state.counter.orders);
    const myEmail = useSelector((state) => state.counter.auth.user);
    // const myEmail = "saihants1@gmail.com";
    const sent = (order || []).filter(order => order.from === myEmail);
    
    return (
        <div>
            {sent.map((order, i) => {
                const date = new Date(order.created_at);
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
        </div>
    );
}

export default SentTransfer;