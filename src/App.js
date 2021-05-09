import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiDictionary = {
    "😀": "Grinning Face",
    "🤩": "Star-Struck",
    "😋": "Face Savoring Food",
    "🤫": "Shushing Face",
    "🤔": "Thinking Face"
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
      <h1>inside outtt</h1>
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
