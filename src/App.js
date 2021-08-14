import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiDictionary = {
    "😀": "Grinning Face",
    "🤩": "Star-Struck",
    "😋": "Face Savoring Food",
    "🤫": "Shushing Face",
    "🤔": "Thinking Face",
    "🤪": "Zany Face",
    "😛": "Face with Tongue",
    "😔": "Pensive Face",
    "🤢": "Nauseated Face",
    "🥶": " Cold Face"
  };

  const emojiIcons = Object.keys(emojiDictionary);

  let [emoji, setEmoji] = useState("");

  const changeHandler = (e) => {
    emoji = emojiDictionary[e.target.value];

    if (emoji === undefined) {
      emoji = "We don't have this in our database";
    }
    setEmoji(emoji);
  };

  const emojiHandler = (item) => {
    emoji = emojiDictionary[item];
    setEmoji(emoji);
  };

  return (
    <div className="App">
      <h1>Inside Outtt</h1>
      <img src="https://i.pinimg.com/originals/fc/64/65/fc6465b730eab5f372737a1a34cf6895.gif" />
      <input onChange={changeHandler} />
      <h3>{emoji}</h3>
      {emojiIcons.map((item) => {
        return (
          <span
            onClick={() => emojiHandler(item)}
            key={item}
            style={{ margin: "0.5em" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
