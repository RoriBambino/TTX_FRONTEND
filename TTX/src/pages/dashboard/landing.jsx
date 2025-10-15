import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LandingBG from "../../images/index img.gif";

export default function landing() {
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate("/SetUp");
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <img
        src={LandingBG}
        alt="Landing Background"
        className="w-full h-full object-cover"
      />

      <div className="absolute justify-center left-50 bottom-30 item-center flex">
        <button
          onClick={() => handlePlay()}
          className="btn bg-green-400 hover:bg-white hover:text-black 
        rounded-full w-lg h-17 shadow-lg shadow-black text-3xl font-bold text-center items-center"
        >
          <span>Play</span>
        </button>
      </div>
    </div>
  );
}
