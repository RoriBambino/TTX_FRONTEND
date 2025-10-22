import React, { useState } from "react";

export default function cardlist() {
  const [cards, setCards] = useState(cardContents);

  function drag(ev, card) {
    ev.dataTransfer.setData("application/json", JSON.stringify(card));
  }

  return (
    <div>
      {/* Draggable Cards */}
      <div className="flex grid-cols-1 md:grid-cols-3 gap-4 ">
        {cardContents.map((card) => (
          <div
            key={card.id}
            id={card.id}
            draggable={true}
            onDragStart={drag}
            className={` p-4 border border-gray-300 rounded-lg bg-gradient-to-b ${card.color} via-${card.color} to-white shadow-sm cursor-grab hover:shadow-md transition-all hover:bg-blue-50`}
          >
            {card.title} {card.content}
          </div>
        ))}
      </div>
    </div>
  );
}
