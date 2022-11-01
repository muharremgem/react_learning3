import React from "react";
import ascı from "../assets/ascı.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="text-2xl flex  flex-col justify-center items-center bg-green-500">
        <h1 className="font-bold text-3xl ">Food House</h1>
        <h2> Login to See All of the Delicious Recipes</h2>
      </div>
      <div>
        <form onSubmit={() => navigate("Home")}>
          <div className="foto flex flex-col justify-center items-center">
            <img className="w-[9rem] bg-transparent       " src={ascı} alt="" />
            <input
              className="p-4 m-5 rounded-xl  text-xl"
              type="text"
              placeholder="Enter your name"
              required
            />
            <input
              className="p-4 m-3 rounded-xl text-xl"
              type="password"
              placeholder="password"
              required
            />

            <button
              type="submit"
              className="bg-orange-500 p-3 m-3 px-7 rounded-2xl hover:scale-90 hover:bg-green-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
