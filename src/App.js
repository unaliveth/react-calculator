import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        // Використовує eval для обчислень (потрібно бути обережним із безпекою)
        const result = eval(input);
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput(""); // Очищення вхідного поля
    } else {
      setInput(input + value);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.screen}>{input || "0"}</div>
      <div style={styles.buttons}>
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "C", "0", "=", "+"].map((btn) => (
          <button key={btn} style={styles.button} onClick={() => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "200px",
    margin: "20px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  screen: {
    width: "100%",
    height: "40px",
    backgroundColor: "#f0f0f0",
    textAlign: "right",
    padding: "10px",
    marginBottom: "10px",
    fontSize: "20px",
    border: "1px solid #ccc",
  },
  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "5px",
  },
  button: {
    height: "40px",
    fontSize: "18px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    cursor: "pointer",
  },
};

export default Calculator;
