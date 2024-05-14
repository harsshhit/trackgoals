import React from "react";
import { useSwipeable } from "react-swipeable";

interface SwipeButtonProps {
  onSwipeRight: () => void;
}

const SwipeButton: React.FC<SwipeButtonProps> = ({ onSwipeRight }) => {
  const swipeHandlers = useSwipeable({
    onSwipedRight: () => {
      onSwipeRight();
    },
    // preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: false,
  });

  return (
    <button
      {...swipeHandlers}
      style={{
        width: "100px",
        height: "50px",
        backgroundColor: "lightgray",
        cursor: "pointer",
      }}
    >
      Swipe Right to Check All
    </button>
  );
};

export default SwipeButton;
