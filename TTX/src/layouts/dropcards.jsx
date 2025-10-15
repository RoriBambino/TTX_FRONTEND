import React, { useState } from "react";

export default function DropCards() {
  const [droppedCards, setDroppedCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContainer, setSelectedContainer] = useState(null);

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const card = document.getElementById(data);

    if (!droppedCards.includes(data)) {
      setDroppedCards((prev) => [...prev, data]);
      card.style.display = "none";
    }
  }

  function openModal(container) {
    setSelectedContainer(container);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedContainer(null);
  }

  // Get card content by ID for modal display
  const getCardContent = (cardId) => {
    const cards = {
      card1: { title: "Card 1:", content: "Insider Threat" },
      card2: { title: "Card 2:", content: "External Hacker" },
      card3: { title: "Card 3:", content: "Malware Injection" },
    };
    return cards[cardId] || { title: "", content: "" };
  };

  const dropContainers = [
    {
      id: 1,
      category: "safeguards",
      title: "SAFEGUARDS/CONTROLS",
      color: "bg-yellow-300",
      textcolor: "text-yellow-800",
      bg: "bg-yellow-200",
      bordercolor: "border-yellow-600",
      cards: [],
    },
    {
      id: 2,
      category: "vulnerabilities",
      title: "VULNERABILITIES",
      color: "bg-blue-600",
      textcolor: "text-blue-800",
      bg: "bg-blue-300",

      bordercolor: "border-blue-600",
      cards: [],
    },
    {
      id: 3,
      category: "threatAgents",
      title: "THREAT AGENTS",
      color: "bg-orange-400",
      textcolor: "text-orange-700",
      bg: "bg-orange-200",

      bordercolor: "border-orange-600",
      cards: [],
    },
    {
      id: 4,
      category: "risks",
      title: "RISKS",
      color: "bg-red-600",
      textcolor: "text-red-800",
      bg: "bg-red-200",

      bordercolor: "border-red-600",
      cards: [],
    },
    {
      id: 5,
      category: "pillars",
      title: "INFOSEC PILLARS",
      color: "bg-purple-400",
      textcolor: "text-purple-800",
      bg: "bg-purple-200",

      bordercolor: "border-purple-800",
      cards: [],
    },
  ];

  return (
    <div className=" w-full max-w-6xl overflow-visible relative justify-center items-center z-50 h-min  mx-auto ">
      {/* Main container */}
      <div className="relative  flex flex-col gap-16 w-full ">
        {/* TOP ROW: Main containers and Infosec card side by side */}
        <div className="flex justify-between px-20  ">
          <div className="grid w-1/2  gap-6">
            {dropContainers
              .filter((container) => container.id >= 1 && container.id <= 4)
              .map((container) => (
                <div
                  key={container.id}
                  className={`${container.color} flex justify-center items-center rounded-xl w-1/2  h-20 cursor-pointer
                   hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-md shadow-gray-400`}
                  onClick={() => openModal(container)}
                  onDrop={drop}
                  onDragOver={allowDrop}
                >
                  <div className="flex flex-col justify-center items-center p-2">
                    <h3 className="text-black font-medium text-lg text-center leading-tight">
                      {container.title}
                    </h3>
                  </div>
                </div>
              ))}
          </div>

          {/* RIGHT: Infosec card */}
          <div className=" w-1/3 flex justify-end  pt-16  ">
            {dropContainers
              .filter((container) => container.id === 5)
              .map((container) => (
                <div key={container.id} className="">
                  <div
                    className={`${container.color}  justify-center items-center rounded-xl w-full h-full cursor-pointer
                     hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-md shadow-gray-400`}
                    onClick={() => openModal(container)}
                    onDrop={drop}
                    onDragOver={allowDrop}
                  >
                    <div className=" text-start justify-center items-center p-2">
                      <h3 className="text-black font-medium text-lg text-center leading-tight">
                        {container.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* BOTTOM SECTION: Draggable Cards */}
        <div className=" relative z-0 rounded-lg   items-center ">
          {/* Container */}
          <div className="bg-white p-6 justify-center rounded-2xl rounded-b-none shadow-md shadow-gray-400 mx-40">
            <div className="mb-4 text-start">
              <h3 className="text-lg font-semibold  text-gray-700">
                Your Cards
              </h3>
              <p>Choose a Category and pick a card to put on the boards</p>
            </div>
            {/*Card Categories Selection   */}
            <div className="flex">
              {dropContainers.map((container) => (
                <div
                  key={container.id}
                  className="flex flex-col  justify-center text-center mr-4 mb-2"
                >
                  <div
                    className={`${container.bg} ${container.bordercolor} ${container.textcolor}
                    } cursor-pointer border font-medium text-sm px-3 py-2 w-full h-10  rounded-xl`}
                  >
                    {container.title}
                  </div>
                </div>
              ))}
            </div>
            {/* Cards  */}
            <div className=" grid-cols-1 md:grid-cols-3 gap-4 hidden">
              <div
                id="card1"
                draggable={true}
                onDragStart={drag}
                className=" p-4 border border-gray-300 rounded-lg bg-white shadow-sm cursor-grab hover:shadow-md transition-all hover:bg-blue-50"
              >
                <strong>Card 1:</strong> Insider Threat
              </div>
              <div
                id="card2"
                draggable={true}
                onDragStart={drag}
                className="p-4 border border-gray-300 rounded-lg bg-white shadow-sm cursor-grab hover:shadow-md transition-all hover:bg-blue-50"
              >
                <strong>Card 2:</strong> External Hacker
              </div>
              <div
                id="card3"
                draggable={true}
                onDragStart={drag}
                className="p-4 border border-gray-300 rounded-lg bg-white shadow-sm cursor-grab hover:shadow-md transition-all hover:bg-blue-50"
              >
                <strong>Card 3:</strong> Malware Injection
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 pt-20"
          onClick={closeModal}
        >
          <div
            className="bg-white w-full max-w-md max-h-[70vh] rounded-xl p-6 overflow-y-auto relative mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-2xl cursor-pointer hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
            >
              &times;
            </button>

            <h3 className="text-center text-xl font-semibold mb-6">
              {selectedContainer?.title || "Items"} List
            </h3>

            <div className="space-y-4">
              {droppedCards.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-lg mb-2">
                    No items added yet.
                  </p>
                  <p className="text-gray-400 text-sm">
                    Drag cards from below to add them to{" "}
                    {selectedContainer?.title.toLowerCase() || "this container"}
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {droppedCards.map((cardId) => {
                    const card = getCardContent(cardId);
                    return (
                      <div
                        key={cardId}
                        className="p-4 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <strong className="text-gray-800">
                              {card.title}
                            </strong>
                            <span className="text-gray-600 ml-2">
                              {card.content}
                            </span>
                          </div>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                            Added
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {droppedCards.length} item(s) added
                </span>
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
