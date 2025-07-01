import React, { useEffect, useState } from "react";  
import { useDispatch ,useSelector } from "react-redux";
import { signUp } from "../../features/counter/counterSlice";
import Spinner from "../../compunents/Spinner";
import { useNavigate } from "react-router-dom";  

const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const loading = useSelector((state) => state.counter.auth.loading);
  const err = useSelector((state) => state.counter.auth.error);
  const userId = useSelector((state) => state.counter.auth.uid)
  const signup = () => {
    if (password1 === password2) {
      alert("Signup: " + email + " : " + password1);
      dispatch(signUp({ email, password: password1 }));
    } else {
      setError("Нууц үгнүүд хоорондоо таарахгүй байна!");
    }
  };
  useEffect(() =>  {
    if (userId) {
      navigate('/');
    }
  },[userId, navigate  ]);

  return (
    <div className="bg-white flex flex-col max-w-2xl rounded-lg ">
      <div className="bg-white p-4 m-2  flex flex-col max-w-2xl items-center text-center gap-2">
        <h2 className="font-bold" >Тавтай морилно уу</h2>
        <p className="font-semibold">
        Бүртгэлтэй юу?{" "}
      <a
        onClick={() => navigate("/login")}
        className="text-blue-600 cursor-pointer hover:underline"
      >
        Нэвтрэх
      </a>
    </p>
        <input
              type="email"
              placeholder="email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-72 border-b-2 border-gray-500 p-2 hover:border-blue-600 focus:placeholder-transparent placeholder-gray-500 focus:outline-none focus:ring-0"
          />
          <input
              type="password"
              placeholder="password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              className=" w-72 border-b-2 border-gray-500 p-2 hover:border-blue-600 focus:placeholder-transparent placeholder-gray-500 focus:outline-none focus:ring-0"
          />
          {/* border-indigo-500 */}
        <input 
              type="password"  
              placeholder="confirm password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              className="mb-2 w-72 border-b-2 border-gray-500 p-2 hover:border-blue-600 focus:placeholder-transparent placeholder-gray-500 focus:outline-none"
          />
          </div>
          {err && <div style={{color:'red' ,textAlign: 'center'}} >{err}</div>}

          {loading && <Spinner />} 

        <button onClick={signup} className="bg-blue-600 text-white py-2 w-full cursor-pointer hover:bg-blue-500 rounded-b-lg">БҮРТГҮҮЛЭХ</button>
    </div>
  );
};

export default SignIn;