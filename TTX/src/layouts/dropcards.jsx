import React, { useState } from "react";
import CardContainer, {
  dropContainers,
  cardContents,
} from "../layouts/cardcontainers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function DropCards() {
  const [droppedCards, setDroppedCards] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContainer, setSelectedContainer] = useState(null);
  const [isCardPanelOpen, setIsCardPanelOpen] = useState(false);
  //
  const [availableCards, setAvailableCards] = useState(cardContents);

  // Remove Card Function
  const [deleteCard, setDeleteCard] = useState(null);
  function removeCard(containerId, cardId) {
    // Guard
    const list = droppedCards[containerId];
    if (!Array.isArray(list)) return;

    const returnCard = droppedCards[containerId].find((c) => c.id === cardId);
    if (!returnCard) return;

    // Add Card removal Animation
    setDeleteCard(cardId);

    setTimeout(() => {
      setDroppedCards((prev) => {
        const updated = { ...prev };

        // Filter out card to match  with its id
        updated[containerId] = updated[containerId].filter(
          (c) => c.id !== cardId
        );
        return updated;
      });

      setAvailableCards((prev) => {
        if (prev.some((c) => c.id === returnCard.id)) return prev;
        return [...prev, returnCard];
      });

      setDeleteCard(null);
    }, 300);
  }

  // Toggle Function
  const toggleCardPanel = () => setIsCardPanelOpen((prev) => !prev);

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drop(ev, containerId) {
    ev.preventDefault();

    const data = ev.dataTransfer.getData("application/json");
    if (!data) return;

    let card;
    try {
      card = JSON.parse(data);
    } catch (err) {
      return;
    }

    const container = dropContainers.find((c) => c.id === containerId);
    if (!container) return;

    // Checks if Cards is in right category
    if (card.category !== container.category) {
      const target = ev.currentTarget;
      target.classList.add("ring-2", "ring-red-500");
      setTimeout(() => {
        target.classList.add(
          "ring-2",
          "ring-red-500",
          "transition",
          "duration-500"
        );
      }, 2000);
      return;
    }
    // Avoids Duplicated Cards
    setDroppedCards((prev) => {
      const updated = { ...prev };
      if (!updated[containerId]) {
        updated[containerId] = [];
      }
      // Avoid duplicates
      if (!updated[containerId].some((c) => c.id === card.id)) {
        updated[containerId].push(card);
      }
      return updated;
    });

    // Hide card
    if (typeof handleCardDrop === "function") {
      handleCardDrop(card.id);
    }

    // Remove Card from Available Cards
    setAvailableCards((prev) => prev.filter((c) => c.id !== card.id));
  }

  // Modal Functions
  // Open
  function openModal(container) {
    setSelectedContainer(container);
    setIsModalOpen(true);
  }
  // Close
  function closeModal() {
    setIsModalOpen(false);
    setSelectedContainer(null);
  }

  //  Function to hide the card using event handler
  function handleCardDrop(cardId) {
    const event = new CustomEvent("cardDrop", { detail: cardId });
    window.dispatchEvent(event);
  }

  return (
    <div className=" w-full max-w-6xl overflow-auto relative justify-center items-center z-50 h-min  mx-auto ">
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
                  className={`${container.color} relative flex justify-center items-center rounded-xl w-1/2  h-20 cursor-pointer
                   hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-md shadow-gray-400`}
                  onClick={() => openModal(container)}
                  onDrop={(e) => drop(e, container.id)}
                  onDragOver={allowDrop}
                >
                  <div className="flex flex-col justify-center items-center p-2">
                    <h3 className="text-black font-medium text-lg text-center leading-tight">
                      {container.title}
                    </h3>
                  </div>
                  {/* Count Cards Dropped */}
                  <div
                    className="absolute bottom-0 right-0 bg-white text-black rounded-full 
                  w-7 h-7 flex items-center justify-center text-sm font-medium shadow-md"
                  >
                    {droppedCards[container.id]?.length || 0}
                  </div>
                </div>
              ))}
          </div>

          {/* RIGHT: Infosec card */}
          <div className=" w-1/3 flex justify-end  pt-16  ">
            {dropContainers
              .filter((container) => container.id === 5)
              .map((container) => (
                <div key={container.id} className="w-1/2">
                  <div
                    className={`${container.color} relative  justify-center items-center rounded-xl w-full h-full cursor-pointer
                     hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-md shadow-gray-400`}
                    onClick={() => openModal(container)}
                    onDrop={(e) => drop(e, container.id)}
                    onDragOver={allowDrop}
                  >
                    <div className=" text-start justify-center items-center p-2 w-full">
                      <h3 className="text-black font-medium text-lg text-center leading-tight">
                        {container.title} PILLARS
                      </h3>
                    </div>
                    {/* Count Cards Dropped */}
                    {/* <div
                      className="absolute bottom-0 right-0 bg-white text-black rounded-full 
                  w-7 h-7 flex items-center justify-center text-sm font-medium shadow-md"
                    >
                      {droppedCards[container.id]?.length || 0}
                    </div> */}
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* Submit Button and Add Cards */}
        <div className=" flex flex-row items-center w-full  justify-center gap-1 text-white font-bold text-xl z-40 ">
          {/* Submit Button */}
          <button
            className="bg-gradient-to-l from-green-600 to-green-800 w-50  rounded-xl mr-4 "
            onClick={() => ""}
          >
            Submit
          </button>
          <button
            className="bg-gradient-to-l from-blue-600 to-blue-800 px-20 py-4 rounded-xl"
            onClick={toggleCardPanel}
          >
            Add Card
          </button>
        </div>
        {/* BOTTOM: Draggable Cards */}
        <div className="z-50">
          <CardContainer
            onCardDrop={handleCardDrop}
            isOpen={isCardPanelOpen}
            toggleOpen={toggleCardPanel}
            availableCards={availableCards}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0  border border-black
           bg-opacity-50 flex justify-center items-start z-50 pt-20"
          onClick={closeModal}
        >
          <div
            className="bg-white w-full max-w-dvh max-h-svh rounded-xl p-6 overflow-y-auto relative mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-2xl cursor-pointer hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
            >
              &times;
            </button>
            {/* Title */}
            <h3 className="text-center text-xl font-semibold mb-6">
              {selectedContainer?.title || "Items"} List
            </h3>

            <div className="space-y-4">
              {selectedContainer &&
              (!droppedCards[selectedContainer.id] ||
                droppedCards[selectedContainer.id].length === 0) ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-lg mb-2">
                    No items added yet.
                  </p>
                  <p className="text-gray-400 text-sm">
                    Drag cards from below to add them to{" "}
                    {selectedContainer?.title.toLowerCase() || "this container"}
                    .
                  </p>
                </div>
              ) : (
                <div className="space-y-3 flex flex-col overflow-auto">
                  {droppedCards[selectedContainer.id]?.map((card) => (
                    <div
                      key={card.id}
                      className={` relative p-4 border border-gray-300  w-50 h-70 bg-gradient-to-b  ${
                        card.color
                      } via-${card.color} to-white  
                      rounded-lg  hover:bg-gray-100 transition-colors shadow-sm flex flex-col justify-between
                       ${
                         deleteCard === card.id
                           ? "opacity-0 scale-95"
                           : "opacity-100 scal-100"
                       }`}
                    >
                      <div className=" justify-center text-center ">
                        <button
                          onClick={() =>
                            removeCard(selectedContainer.id, card.id)
                          }
                          className="absolute top-2 right-2 bg-green-200 text-green-800 px-2 py-1 w-10 h-10 rounded text-xs "
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                      <div className="flex flex-col justify-center items-center mt-4 ">
                        <strong className="text-gray-800">{card.title}</strong>
                        <span className="text-gray-600 ml-2">
                          {card.content}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {(selectedContainer &&
                    droppedCards[selectedContainer.id]?.length) ||
                    0}{" "}
                  item(s) added
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
