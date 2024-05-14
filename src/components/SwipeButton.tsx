import React, { useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

interface SwipeButtonProps {
  onSwipeRight: () => void;
}

const SwipeButton: React.FC<SwipeButtonProps> = ({ onSwipeRight }) => {
  const [isSwiping, setIsSwiping] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const swipeHandlers = useSwipeable({
    onSwipedRight: () => {
      if (isSwiping) {
        onSwipeRight();
      }
    },
    onSwiping: (event) => {
      setIsSwiping(true);
    },
    onSwiped: () => {
      setIsSwiping(false);
    },
    trackTouch: true,
    trackMouse: true,
  });

  return (
    <button
      {...swipeHandlers}
      ref={buttonRef}
      className="relative w-36 h-12 overflow-hidden bg-blue-500 rounded-full text-white font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform duration-300 transform-gpu hover:scale-105"
    >
      <span
        className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center transition-opacity duration-300 opacity-0 ${
          isSwiping ? "opacity-100" : ""
        }`}
      >
        <svg
          className="w-6 h-6 animate-bounce"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5H15M12 12L15 9M15 9L18 12M15 9L12 6M15 19V22M15 22L18 19M15 22L12 19M15 22L9 19M9 2H15M6 21L3 18M3 18L6 15M3 18L6 21M3 18L6 15M3 18L6 21M3 18L6 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="absolute inset-0 flex items-center justify-center">
        Swipe Right to Check All
      </span>
    </button>
  );
};

export default SwipeButton;
