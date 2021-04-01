import React, { useState } from "react";
import "./ClampedText.scss";

const ClampedText = ({ text, amountOfCharacters = 50, ...rest }) => {
  const [showText, setTextVisibility] = useState(false);

  let textToRender;
  let otherText = "";

  if (text.length > amountOfCharacters) {
    textToRender = text.substr(0, amountOfCharacters);
    otherText = text.substr(amountOfCharacters);
  } else {
    textToRender = text;
  }

  return (
    <p className="clamped-text" {...rest}>
      {textToRender}
      {otherText.length > 0 && !showText && (
        <span className="more-btn" onClick={() => setTextVisibility(true)}>
          ...
        </span>
      )}
      {showText && otherText}
    </p>
  );
};

export default ClampedText;
