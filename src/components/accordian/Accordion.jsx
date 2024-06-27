import React, { useEffect, useState } from "react";
import "./styles.scss";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({ data, openOthers }) => {
  const [accordionItems, setAccordionItems] = useState(null);

  useEffect(() => {
    if (data) {
      setAccordionItems([
        // get the first obj form the data array
        ...data.slice(0, 1).map((items) => ({
          ...items,
          toggled: true,
        })),
        // get the rest of the obj
        ...data.slice(1).map((items) => ({
          ...items,
          toggled: false,
        })),
      ]);
    }
  }, [data]);

  const handleAcccordionClick = (clickedItem) => {
    setAccordionItems([
      ...accordionItems.map((item) => {
        let toggled = item.toggled;

        if (clickedItem.id === item.id) {
          toggled = !item.toggled;
        } else if (!openOthers) {
          toggled = false;
        }

        return {
          ...item,
          toggled,
        };
      }),
    ]);
  };

  return (
    <div className="accordianContainer">
      {accordionItems?.map((listItems, key) => (
        <div
          className={`accordian ${listItems.toggled ? "toggled" : ""}`}
          key={key}
        >
          <button
            className="toggle"
            onClick={() => handleAcccordionClick(listItems)}
          >
            <p>{listItems.que}</p>
            <div
              className="openClose"
              style={{
                transform: `${listItems.toggled ? "rotate(180deg)" : ""}`,
              }}
            >
              <IoIosArrowDown />
            </div>
          </button>
          <div className="ansContainer">
            <div className="ans">{listItems.ans}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
