import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Book from "../../../images/book.png";
import Flash from "../../../images/flash.png";

export default function dashboard() {
  const navigate = useNavigate();

  // Button Handlers
  const instructionsHandler = () => {
    navigate("GameInstructions");
  };
  const threatSelectHandler = () => {
    navigate("ThreatSelect");
  };
  const startGameHandler = () => {
    navigate("/TTXGame");
  };
  return (
    <div className="bg-white text-black w-screen min-h-screen p-10 overflow-auto ">
      {/* Team Name Var. */}
      <div className="justify-center text-center pt-10 ">
        <div className="text-2xl font-medium text-blue-500">
          <h1>Team Name</h1>
        </div>
        <div className="text-3xl font-medium text-gray-400 ">
          <h2>Ready to begin your adventure</h2>
        </div>
      </div>

      <div className="px-50">
        {/* Game Instructions Button */}
        <div className="justify-start   pt-20">
          <button
            onClick={() => instructionsHandler()}
            className="btn bg-gray-200 hover:bg-white hover:text-black 
            rounded-lg w-full h-30 shadow-md shadow-black text-3xl font-bold text-left 
            flex flex-row 
            "
          >
            <div className="bg-green-300 flex items-center justify-center rounded-lg w-20 h-20">
              <img src={Book} alt="Book" className="w-15 h-15" />
            </div>

            <div className="flex flex-col justify-center pl-10">
              <span className="text-4xl">Game Instructions</span>
              <span className="text-2xl text-gray-400">
                Learn how to play and understand the rules
              </span>
            </div>
          </button>
        </div>

        {/* Threat Select Button */}
        <div className="justify-start   pt-10">
          <button
            onClick={() => threatSelectHandler()}
            className="btn bg-gray-200 hover:bg-white hover:text-black 
            rounded-lg w-full h-30 shadow-md shadow-black text-3xl font-bold text-left 
            flex flex-row 
            "
          >
            <div className="bg-red-300 flex items-center justify-center rounded-lg w-20 h-20">
              <img src={Flash} alt="Flash" className="w-15 h-15" />
            </div>

            <div className="flex flex-col justify-center pl-10">
              <span className="text-4xl">Threat Selector</span>
              <span className="text-2xl text-gray-400">
                Spin the wheel and determine threat
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Start Game Button */}
      <div className=" justify-center text-center items-center pt-20">
        <button className="btn bg-green-400 hover:bg-white hover:text-black w-xl h-1/2 rounded-lg">
          <button
            onClick={() => startGameHandler()}
            className="text-3xl text-white hover:text-black font-bold"
          >
            Start Game
          </button>
        </button>
      </div>
    </div>
  );
}
