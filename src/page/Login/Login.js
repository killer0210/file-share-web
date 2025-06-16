import React from "react";  

const Login = () => {
  return (
    <div className="bg-white flex flex-col max-w-2xl rounded-lg ">
    <div className="bg-white p-2 m-2  flex flex-col max-w-2xl items-center gap-2">
      <h2 className="font-bold" >Welcome Back</h2>
      <p className="font-semibold" >Don't haven an yet? <a className="text-blue-600">Sign Up</a></p>
      <input
            type="email"
            placeholder="email address"
            className="mt-2 w-72 border-b-2 border-gray-500 p-2 hover:border-blue-600 focus:placeholder-transparent placeholder-gray-500 focus:outline-none focus:ring-0"
        />
        {/* border-indigo-500 */}
      <input 
            type="Password"  
            placeholder="password "
            className="mb-2 w-72 border-b-2 border-gray-500 p-2 hover:border-blue-600 focus:placeholder-transparent placeholder-gray-500 focus:outline-none"
        />
        </div>
      <button className="bg-blue-600 text-white py-2 w-full cursor-pointer hover:bg-blue-500 rounded-b-lg">Login</button>
    </div>
  );
}

export default Login;