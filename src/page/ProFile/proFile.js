import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/counter/counterSlice";
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userGmail = useSelector((state) => state.counter.auth.user);
    const handleSave = () => {
        console.log("Шинэ нууц үг: 12325" );
    }
    const handleLogOut = () => {
        dispatch(logOut());
        navigate("/");
    }

    return(
        <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow space-y-4">
            <div className="flex items-center space-x-4"><img src="https://via.placeholder.com/48" alt="Avatar" className="w-12 h-12 rounded-full object-cover "/></div>
            <div>
                <label className="block text-md text-gray-600 mb-1">Gmail</label>
                <input 
                    type="email"
                    placeholder={userGmail}
                    readOnly
                    className="max-w-64 border-b-2 p-2 rounded focus:outline-none focus:ring focus:border-blue-400 placeholder-gray-900"
                    />
            </div>
            <div>
                <label className="block text-md text-gray-600 mb-1">Password</label>
                <input 
                    type="password"
                    placeholder="new password"
                    className="max-w-64 border-b-2 p-2 rounded focus:outline-none focus:ring focus:border-blue-400"
                    />
            </div>
            <div>
                <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Хадгалах</button>
            </div>
            <div className="flex justify-end">
                <button onClick={handleLogOut} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-600 transition">Гарах</button>
            </div>
        </div>
        
    )
}

export default Profile;