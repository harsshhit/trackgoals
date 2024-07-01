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
    onSwiping: () => {
      setIsSwiping(true);
    },
    onSwiped: () => {
      setIsSwiping(false);
    },
    trackTouch: true,
    trackMouse: true,
  });

  const handleMouseDown = () => {
    setIsSwiping(true);
  };

  const handleMouseUp = () => {
    if (isSwiping) {
      onSwipeRight();
    }
    setIsSwiping(false);
  };

  return (
    <div
      className="relative m-4 w-60 h-12 overflow-hidden bg-blue-500 rounded-full text-white font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform duration-300 transform-gpu hover:scale-105"
      style={{ touchAction: "none" }} // Add touch-action CSS property
    >
      <button
        {...swipeHandlers}
        ref={buttonRef}
        className="absolute inset-0 w-full h-full flex items-center justify-center"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        Swipe to Check All
      </button>
    </div>
  );
};

export default SwipeButton;
