import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropCards from "../../../layouts/dropcards";
// Images
import Board from "../../../images/Middle Board 1.png";

export default function StartGame() {
  // Team Names
  const TeamNames = ["Alpha"];
  // Threats
  const threats = ["Threat 1", "Threat 2", "Threat 3", "Threat 4", "Threat 5"];

  return (
    <div className="bg-gray-100 text-black w-full  min-h-screen p-5 overflow-auto">
      {/* Team Names */}
      <div
        className="flex flex-row justify-center  items-center pt-5 pb-10  font-medium text-linear
      bg-gradient-to-r from-green-400 to-green-950 bg-clip-text text-transparent "
      >
        <h1 className="text-3xl pr-3 ">Team</h1>
        <h1 className="">{TeamNames}</h1>
      </div>
      {/* IMG */}
      <div className="flex justify-center items-center ">
        <img
          src={Board}
          alt="Board Image"
          className="w-1/2 justify-center items-center rounded-lg"
        />
      </div>
      {/* Game Area */}
      <div className="absolute right-40 top-40   ">
        {/* Threat Title */}
        <div className="flex flex-col w-40 h-15  bg-pink-500  shadow-lg rounded-lg justify-center text-center">
          <p className="text-black font-medium text-2xl text-center justify-center">
            {threats[1]}
          </p>
        </div>
      </div>
      {/* Drag and Drop Area */}
      <div className="absolute top-40 z-50 w-full left-0 ">
        <div className="">
          {/* Threat Agents Box */}
          <DropCards />
        </div>
      </div>
    </div>
  );
}
