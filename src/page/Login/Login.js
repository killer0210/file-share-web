import React, { useState } from "react"; 
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../features/counter/counterSlice";
import Spinner from "../../compunents/Spinner";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      // ✅ unwrap ашиглавал error барихад амархан
      await dispatch(logIn({ email, password })).unwrap();
      navigate("/"); // ✅ амжилттай болвол home руу
    } catch (err) {
      setError("Нэвтрэх нэр нууц үг буруу байна");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="bg-white flex flex-col max-w-2xl rounded-lg ">
      <div className="bg-white p-2 m-2  flex flex-col max-w-2xl items-center gap-2">
        <h2 className="font-bold" >Тавтай морилно уу</h2>
        <p className="font-semibold">
      Бүртгэл байхгүй юу?{" "}
      <a
        onClick={() => navigate("/signIn")}
        className="text-blue-600 cursor-pointer hover:underline"
      >
        Бүртгүүлэх
      </a>
    </p>
        <input
          type="email"
          placeholder="email address"
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-72 border-b-2 border-gray-500 p-2 hover:border-blue-600 focus:placeholder-transparent placeholder-gray-500 focus:outline-none focus:ring-0"
        />
        {/* border-indigo-500 */}
        <input 
          type="password"  
          placeholder="password "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-2 w-72 border-b-2 border-gray-500 p-2 hover:border-blue-600 focus:placeholder-transparent placeholder-gray-500 focus:outline-none"
        />
      </div>
      {loading && <Spinner />}
      {error && <p className="text-red-500">{error}</p>}
      <button onClick={handleLogin} className="bg-blue-600 text-white py-2 w-full cursor-pointer hover:bg-blue-500 rounded-b-lg">Login</button>
    </div>
  );
}

export default Login;