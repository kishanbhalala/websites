import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide the button based on the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "30px",
            color: "white",
            borderRadius: "10",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "none",
            cursor: "pointer",
            zIndex: 1000,
            fontSize: "30px", // Larger arrow
          }}
        >
          ⬆
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
