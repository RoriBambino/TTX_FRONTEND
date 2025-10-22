import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
// Categories for containers
export const dropContainers = [
  {
    id: 1,
    category: "safeguards",
    title: "SAFEGUARDS/CONTROLS",
    color: "bg-yellow-300",
    textcolor: "text-yellow-800",
    bg: "bg-yellow-200",
    bordercolor: "border-yellow-600",
    cards: [],
    description:
      "a security risk posed by an individual with legitimate access to an organization's assets",
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
    description:
      "a program that runs separately from the target process and interacts with it externally",
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
    description:
      "a cyberattack where an attacker exploits a vulnerability to inject malicious code into a vulnerable application or system.",
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
    description:
      "permanent destruction, corruption, or permanent inaccessibility of digital information.",
  },
  {
    id: 5,
    category: "pillars",
    title: "INFOSEC",
    color: "bg-purple-400",
    textcolor: "text-purple-800",
    bg: "bg-purple-200",

    bordercolor: "border-purple-800",
    cards: [],
    description:
      "the hardware, software, and technical measures used to protect sensitive information from misuse, unauthorized access, or disruption.",
  },
];

export const cardContents = [
  {
    id: 1,
    title: "Card 1:",
    category: "safeguards",
    color: "from-yellow-600",

    content: "Insider Threat",
  },
  {
    id: 2,
    title: "Card 2:",
    category: "threatAgents",
    color: "from-orange-600",

    content: "External Hacker",
  },
  {
    id: 3,
    title: "Card 3:",
    category: "vulnerabilities",
    color: "from-blue-600",

    content: "Malware Injection",
  },
  {
    id: 4,
    title: "Card 4:",
    category: "risks",
    color: "from-red-600",

    content: "Data Loss",
  },
  {
    id: 5,
    title: "Card 5:",
    category: "pillars",
    color: "from-purple-600",

    content: "Technology",
  },
];

export default function cardcontainers({
  droppedCards = {},
  onCardDrop,
  isOpen = false,
  toggleOpen = () => {},
  availableCards = [],
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [searchCard, setSearchCard] = useState("");
  const [hiddencards, setHiddenCards] = useState([]);

  // Toggle Close Button

  // Toggle Function for Cards
  const handleClickCategory = (category) => {
    if (selectedCategory === category) {
      setIsVisible((prev) => !prev);
    } else {
      setSelectedCategory(category);
      setIsVisible(true);
    }
  };

  function drag(ev, card) {
    ev.dataTransfer.setData("application/json", JSON.stringify(card));
  }

  // Filter Cards
  const filteredCards = availableCards.filter((card) => {
    const matchesCategory =
      selectedCategory === "all" || card.category === selectedCategory;
    const matchesSearch = card.content
      .toLowerCase()
      .includes(searchCard.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Helper to hide cards
  function hideCard(card) {
    setHiddenCards((prev) => [...prev, card]);
  }
  React.useEffect(() => {
    if (!onCardDrop) return;
    const handleHide = (id) => hideCard(id);
    window.addEventListener("cardDrop", (e) => handleHide(e.detail));
    return () =>
      window.removeEventListener("cardDrop", (e) => handleHide(e.detail));
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 pointer-events-none ">
      {isOpen && (
        <div className="pointer-events-auto max-w-6xl mx-auto rounded-t-2xl">
          {/* BOTTOM SECTION: Draggable Cards */}
          <div className="  rounded-lg   items-center ">
            {/* Container */}
            <div className="bg-white p-6 justify-center rounded-2xl rounded-b-none shadow-md shadow-gray-400 mx-40">
              <div className="mb-4 text-start">
                <div className="flex justify-between items-center w-full ">
                  <h3 className="text-lg font-semibold  text-gray-700">
                    Your Cards
                  </h3>
                  <button onClick={toggleOpen} className="text-end justify-end">
                    <FontAwesomeIcon icon={faX} />
                  </button>
                </div>

                <p>Choose a Category and pick a card to put on the boards</p>
              </div>

              {/*Card Categories Selection   */}
              <div className="flex flex-wrap mb-4">
                {/* Show all  */}
                <div>
                  <button
                    onClick={() => handleClickCategory("all")}
                    className={`border px-2 mr-2 py-2 rounded-xl text-sm font-medium ${
                      selectedCategory === "all" ? "ring-2 ring-blue-500" : ""
                    }`}
                  >
                    Show All
                  </button>
                </div>

                {/* Certain Category */}
                {dropContainers.map((container) => (
                  <div
                    key={container.id}
                    className="flex flex-col justify-center text-center mr-2 mb-2"
                  >
                    <div
                      onClick={() => handleClickCategory(container.category)}
                      className={`${container.bg} ${container.bordercolor} ${
                        container.textcolor
                      }
                    } cursor-pointer border font-medium text-sm px-3 py-2 w-full h-10  rounded-xl
                    transition-all hover:scale-105 ${
                      selectedCategory === container.category && isVisible
                        ? "ring-2 ring-blue-400"
                        : ""
                    } 
                    `}
                    >
                      {container.title}
                    </div>
                  </div>
                ))}
              </div>
              {/* Search Bar */}
              <div className="my-4">
                <div>
                  <input
                    type="text"
                    value={searchCard}
                    onChange={(e) => setSearchCard(e.target.value)}
                    placeholder="Search Cards..."
                    className="w-full rounded-xl border border-gray-400 px-3 py-2 text-sm 
                focus:ring-2 focus:ring-green-400 focus:outline-none
                "
                  />
                </div>
              </div>

              {/* Draggable Cards */}
              {(isVisible || searchCard.trim() !== "") && (
                <div className="flex flex-wrap grid-cols-1 md:grid-cols-3 gap-4 ">
                  {filteredCards.length > 0 ? (
                    filteredCards
                      .filter((card) => !hiddencards.includes(card.id))
                      .map((card) => (
                        <div
                          key={card.id}
                          draggable={true}
                          onDragStart={(ev) => drag(ev, card)}
                          className={` p-4 border border-gray-300 rounded-lg bg-gradient-to-b ${card.color} via-${card.color} to-white 
                          shadow-sm cursor-grab hover:shadow-md transition-all hover:bg-blue-50`}
                        >
                          {card.title} {card.content}
                        </div>
                      ))
                  ) : (
                    <p>No Cards Match</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
