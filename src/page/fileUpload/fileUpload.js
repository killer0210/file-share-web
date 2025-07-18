import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveOrder } from "../../features/counter/counterSlice";
import { useNavigate } from "react-router-dom";

const FileUpload = () => {
    const file = useSelector((state) => state.counter.fileMeta);
    const { saving, finished, error } = useSelector((state) => state.counter.newOrder);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [recipientEmail, setRecipientEmail] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const parts = file.name.split('.');
    const extension = parts.length > 1 ? parts.pop() : null;

    useEffect(() => {
        if (finished && !error) {
            navigate('/transfer');
        }
    }, [finished, error, navigate]);

    const generateUUID = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

    const handleSend = () =>{

        const parts = file.name.split('.');
        const ext = parts.length > 1 ? parts.pop() : "";

        const token = generateUUID();
        const saved_name = `${token}.${ext}`;

        const order = {
            file: {
                ...file,
                saved_name,
                token,
                download_url:`http://localhost:3000/transfer/${saved_name}`,
            },
            to: recipientEmail,
            from: userGmail,
            title,
            message,
            created_at: Date.now(),
            expires_at: Date.now() + 7 * 24 * 60 * 60 * 100,
          };
        dispatch(saveOrder(order));
    };

    const userGmail = useSelector((state) => state.counter.auth.user);

    return (
        <div className="p-4">
        <div className="flex flex-col bg-white p-4 rounded-lg gap-2">
            <div className="bg-gray-100 rounded-md p-2">
                <p className="truncate w-64">{file?.name}</p>
                <p>{file?.size} - {extension}</p>
            </div>
            <input type="email" placeholder="Хүлээн авах имэйл" className="w-64 border-b-2 border-gray-500 p-2 hover:border-blue-600 focus:placeholder-transparent placeholder-gray-500 focus:outline-none" value={recipientEmail} onChange={e => setRecipientEmail(e.target.value)}/>
            
            <input type="email" placeholder={userGmail} readOnly className="w-64 border-b-2 border-gray-500 p-2 hover:border-blue-600 focus:placeholder-transparent placeholder-gray-500 focus:outline-none" value={senderEmail} onChange={e => setSenderEmail(e.target.value)}/>
            <input type="text" placeholder="Гарчиг" className="w-64 border-b-2 border-gray-500 p-2 hover:border-blue-600 focus:placeholder-transparent placeholder-gray-500 focus:outline-none" value={title} onChange={e => setTitle(e.target.value)}/>
            <input type="text" placeholder="Зурвас" className="w-64 border-b-2 border-gray-500 p-2 hover:border-blue-600 focus:placeholder-transparent placeholder-gray-500 focus:outline-none mb-2" value={message} onChange={e => setMessage(e.target.value)}/>
            {saving && <p>Илгээж байна...</p>}
            {finished && !error && <p>Амжилттай илгээлээ!</p>}
            {error && <p>Алдаа гарлаа: {error}</p>}
            <button onClick={handleSend} disabled={saving} className="bg-blue-600 text-white py-2 w-full cursor-pointer hover:bg-blue-500 rounded-lg disabled:bg-gray-400" >{saving ? 'Илгээж байна...' : 'Илгээх'}</button>
        </div>
        </div>
        )
}

export default FileUpload