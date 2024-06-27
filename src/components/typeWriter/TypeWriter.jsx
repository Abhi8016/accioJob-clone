import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const TypeWriter = ({
  heading,
  texts,
  wordDisplayDuration = 1500,
  characterTypingInterval = 90,
  characterRemovingInterval = 50,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  //   const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    let timeout;
    let interval;

    const typeWriter = () => {
      const currentText = texts[currentWordIndex];

      if (!isDeleting && currentCharacterIndex < currentText.length) {
        // Display the next char of the current word
        setDisplayText(
          (prevText) => prevText + currentText[currentCharacterIndex]
        );
        setCurrentCharacterIndex((prevIndex) => prevIndex + 1);

      } else if (!isDeleting && currentCharacterIndex === currentText.length) {
        // Word completely typed, delay before deleting
        clearInterval(interval);
        
        timeout = setTimeout(() => {
            setIsDeleting(true); // changing the isDelet state to true
        }, wordDisplayDuration);


      } else if (isDeleting && displayText.length > 0) {
        // Remove the last char of displayText
        setDisplayText((prevText) => prevText.slice(0, -1));

      } else if (isDeleting && displayText.length === 0) {
        // Move to the next word
        clearInterval(interval);
        setIsDeleting(false); // changing the isDelet state to false
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setCurrentCharacterIndex(0);
        startTyping();
      }
    };

    const startTyping = () => {
      interval = setInterval(
        typeWriter,
        isDeleting ? characterRemovingInterval : characterTypingInterval
      );
    };

    
    startTyping(); // Initial start


    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [
    texts,
    currentWordIndex,
    currentCharacterIndex,
    displayText,
    isDeleting,
    wordDisplayDuration,
    characterTypingInterval,
    characterRemovingInterval,
  ]);

  return (
    <ContentWrapper>
      <div className="typeWriterContainer">
        <div className="typeWriterHeadingText">{heading}</div>
        <div>
          <span className="typeWriter">{displayText}</span>
          <span className="cursor">|</span>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default TypeWriter;
