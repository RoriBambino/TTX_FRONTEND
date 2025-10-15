import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

export default function setUp() {
  const navigate = useNavigate();

  const enterGame = () => {
    navigate("/Dashboard");
  };
  return (
    <div className="bg-white text-black w-screen h-screen p-10 ">
      {/* Header */}
      <div className=" text-center justify-center pt-15">
        <div>
          <h1 className="text-3xl font-bold">Welcome to Awareness TTX</h1>
        </div>

        <div>
          <h2 className="text-4xl font-medium text-gray-400">
            Set up your group to begin the adventure
          </h2>
        </div>
      </div>

      {/* Group Name Input */}

      <div className="text-left pl-20 pt-20  ">
        <div>
          <p className="text-3xl font-bold">Group Name:</p>
        </div>
        <br />
        <div className="pr-20">
          <input
            type="text"
            className="border-2   border-green-400 focus:border-green-500 font-bold   rounded-lg px-5 w-full h-11 text-2xl"
            placeholder="Enter Group Name"
          />
        </div>
      </div>

      <div className="text-left pl-20 pt-10">
        <h2 className="text-3xl text-gray-400">Requirements:</h2>
        <ul className="list-disc pl-15 text-2xl text-gray-400">
          <li>Group Name is Required</li>
          <li>At least 2 Player is required</li>
          <li>One Player must be group leader</li>
        </ul>
      </div>
      {/* Next Button */}
      <div className="justify-center text-center items-center bottom-25">
        <button
          onClick={() => enterGame()}
          className="btn bg-green-400 hover:bg-white hover:text-black 
        rounded-full w-lg h-17 shadow-lg shadow-black text-3xl font-bold text-center items-center mt-20"
        >
          <span>Next</span>
        </button>
      </div>
    </div>
  );
}
