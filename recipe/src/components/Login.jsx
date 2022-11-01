import React from "react";
import foto from "../assets/offer.png";

const Login = () => {
  return (
    <div>
      <div className="text-2xl flex  flex-col justify-center items-center bg-green-500">
        <h1 className="font-bold text-3xl ">Food House</h1>
        <h2> Login to See All of the Delicious Recipes</h2>
      </div>
      <div>
        <form>
          <img className="w-full  " src={foto} alt="foto" />
          <input type="text" placeholder="Enter your name" />
        </form>
      </div>
    </div>
  );
};

export default Login;
