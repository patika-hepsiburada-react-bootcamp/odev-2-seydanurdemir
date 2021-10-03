import React, { useEffect, useState } from "react";
import "./App.css";

// functional component
function App() {
  // sets states
  const [count, setCount] = useState(0);
  const [guess, setGuess] = useState("");
  const [status, setStatus] = useState(0);
  // Keep a word to guess
  const word = "seydanur";

  useEffect(() => {
    window.addEventListener("keydown", onKeyPressed);
    if (status === 0) {
      // Print dash number of word length
      setGuess("_".repeat(word.length));
    }
  });

  const onKeyPressed = event => {
    event.preventDefault();
    const value = event.key;

    setStatus(1);

    if (value.length < 1) {
      return;
    }

    var index = word.toLowerCase().indexOf(value.toLowerCase());
    if (index < 0) {
      if (count === 5) {
        window.location.reload();
      }

      setCount(count + 1);
    } else {
      var newGuess = [''];
      for (var i = 0; i < word.length; i++) {
        if (word.charAt(i).toLowerCase() === value.toLowerCase()) {
          // calculate and print word
          newGuess += word.charAt(i);
        }
        else {
          // calculate and print word
          newGuess += guess.charAt(i);
        }
      }
      setGuess(newGuess);
    }
  };

  return (
    // Print explanations, congrat if user win, display rights
    <div className="App">
      <header className="App-header">
        <div onKeyDown={(e) => onKeyPressed(e)} tabIndex="0">
          
          {guess === word &&
            <div>
              Congratulations!
              <br />
              <br />
              Word : <label style={{ color: "limegreen" }}>{word}</label>
              <br />
              <br />
              <a onClick={() => { window.location.reload() }}>Try Again</a>
            </div>
          }

          {count === 5 &&
            <div>
              Game Over
              <br />
              <br />
              Word : <label style={{ color: "red" }}>{word}</label>
              <br />
              <br />
              <a onClick={() => { window.location.reload() }}>Try Again</a>
            </div>
          }

          {guess !== word && count < 5 &&
            <div>
              Guess
              <br />
              <br />
              <label style={{ color: "yellow" }}>{guess}</label>
              <br />
              <br />
              Remaining : {5 - count}
            </div>
          }

        </div>
      </header>
    </div>
  );
}

export default App;
