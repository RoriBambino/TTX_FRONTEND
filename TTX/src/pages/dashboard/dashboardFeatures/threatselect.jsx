import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faRotateRight,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const threats = ["Threat 1", "Threat 2", "Threat 3", "Threat 4", "Threat 5"];

const colors = [
  "bg-red-500",
  "bg-yellow-400",
  "bg-green-500",
  "bg-blue-500",
  "bg-purple-500",
];

export default function ThreatSelect() {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [selectedThreat, setSelectedThreat] = useState(null);
  const navigate = useNavigate();

  const spinTheWheel = () => {
    setSpinning(true);
    setSelectedThreat(null);

    const index = Math.floor(Math.random() * threats.length);
    const sliceAngle = 360 / threats.length;
    const extraSpins = 5 * 360; // 5 full extra spins

    // Calculate rotation so the selected slice stops at the indicator (top = 0°)
    // We subtract the slice's center angle from 360 to make it stop at the top
    const finalRotation =
      extraSpins + (360 - (index * sliceAngle + sliceAngle / 2));

    setRotation(finalRotation);

    setTimeout(() => {
      setSelectedThreat(threats[index]);
      setSpinning(false);
    }, 2000);
  };

  const backToDashboard = () => {
    navigate("/Dashboard");
  };

  return (
    <div className="bg-gray-100 text-black w-screen min-h-screen p-10 overflow-auto">
      {/* Back Button */}
      <div className="justify-start text-left left-1 pt-5">
        <button
          onClick={backToDashboard}
          className="text-2xl text-black cursor-pointer hover:opacity-80 transition-opacity"
        >
          <span>
            <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
            Back to Game Menu
          </span>
        </button>
      </div>

      {/* Description */}
      <div className="justify-center text-center pt-5 pb-10 flex flex-col font-medium">
        <h1 className="text-3xl text-red-400">Threat Selector Wheel</h1>
        <h3 className="text-3xl text-gray-400">
          Spin the wheel to determine your next challenge
        </h3>
      </div>

      {/* Wheel Spinner */}
      <div className="flex flex-col justify-center items-center pt-15">
        {/* Spin Button */}
        <div className="justify-center pt-10">
          <button
            className="bg-red-600 text-white rounded-lg px-8 py-4 flex items-center justify-center hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold shadow-lg"
            onClick={spinTheWheel}
            disabled={spinning}
          >
            <FontAwesomeIcon
              icon={spinning ? faSpinner : faRotateRight}
              className={`mr-3 ${spinning ? "animate-spin" : ""}`}
              size="lg"
            />
            <span>{spinning ? "Spinning..." : "Spin the Wheel!"}</span>
          </button>
        </div>
      </div>

      {/* Results then will be saved to DB  */}
      <div className="flex justify-center items-center pt-10">
        <div className="bg-white rounded-lg w-2xl h-50 justify-center items-center text-center shadow-md shadow-black p-6 min-h-[120px]">
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-2xl font-medium mb-4">Selected Threat</h2>
            {selectedThreat && (
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-red-500 mb-2">
                  {selectedThreat}
                </span>
                <div
                  className="w-24 h-6 rounded-md mb-2"
                  style={{
                    backgroundColor: colors[
                      threats.indexOf(selectedThreat)
                    ].replace("bg-", ""),
                  }}
                ></div>
                <div className="w-16 h-2 bg-red-500 rounded-full"></div>
              </div>
            )}
            {!selectedThreat && !spinning && (
              <span className="text-xl text-gray-500">
                Spin the wheel to select a threat
              </span>
            )}
            {spinning && (
              <span className="text-xl text-gray-500 animate-pulse">
                Spinning...
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
