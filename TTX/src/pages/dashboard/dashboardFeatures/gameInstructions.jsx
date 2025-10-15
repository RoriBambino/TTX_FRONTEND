import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

// Icons
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Image
import Book from "../../../images/book.png";
import People from "../../../images/people.png";

export default function GameInstructions() {
  const navigate = useNavigate();

  // Navigation Handler
  const backToDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div className="bg-white  text-black w-screen min-h-screen overflow-auto p-10 ">
      {/* Back Button */}
      <div className="justify-start text-left left-1 pt-5">
        <button
          onClick={() => backToDashboard()}
          className="text-2xl text-black cursor-pointer"
        >
          <span>
            <FontAwesomeIcon icon={faChevronLeft} />
            Back to Game Menu
          </span>
        </button>
      </div>
      {/* Game Instructions Contents Header */}
      <div className="justify-center text-center pt-5 pb-10  font-medium ">
        <p className="text-6xl text-green-400">Game Instructions</p>
        <h3 className="text-gray-400 text-4xl">
          Learn how to play and master the game
        </h3>

        {/* Game Information */}
        <div className=" px-40 pt-20 ">
          {/* Game Overview Text */}
          <div>
            <div className="flex flex-row">
              <div className=" items-center flex flex-col justify-center bg-green-300 rounded-xl  w-17 h-17 ">
                <div>
                  <img src={Book} alt="Book" className="w-12 h-12" />
                </div>
              </div>
              <div className="pl-5 justify-center text-center items-center flex">
                <p className=" text-4xl">Game Overview</p>
              </div>
            </div>
            {/* Description */}
            <div className="px-25 font-medium text-left">
              <p className="text-2xl text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                id explicabo fugiat sint libero quia nisi dolorem quas ad qui
                architecto provident repellat suscipit et dignissimos, fugit cum
                non alias!
              </p>
            </div>

            {/* Group Set Up Text */}
            <div className="flex flex-row pt-10">
              <div className=" items-center flex flex-col justify-center bg-green-300 rounded-xl  w-17 h-17 ">
                <div>
                  <img src={People} alt="Book" className="w-12 h-12" />
                </div>
              </div>
              <div className="pl-5 justify-center text-center items-center flex">
                <p className=" text-4xl">Group Set Up</p>
              </div>
            </div>
            {/* Description */}
            <div className="px-25 font-medium text-left">
              <p className="text-2xl text-black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                debitis explicabo minima perferendis consequatur dolor
                repellendus excepturi sit error adipisci. Ea praesentium
                consequuntur autem repudiandae ipsam culpa iusto, odio
                laudantium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
