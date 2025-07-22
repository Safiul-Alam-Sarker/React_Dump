import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  // custom colors not in Tailwind
  const customColors = {
    lavender: "lavender",
    blueAsh: "#7393B3",
  };

  return (
    <>
      <div
        className="min-h-screen flex flex-col items-center justify-center transition-colors duration-300"
        style={{ backgroundColor: customColors[color] || color }}
      >
        <h1 className="text-2xl font-bold mb-6">
          Click a button to change background
        </h1>
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => setColor("red")}
            className="px-4 py-2 rounded text-white bg-red-500 hover:bg-red-600"
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="px-4 py-2 rounded text-white bg-green-500 hover:bg-green-600"
          >
            Green
          </button>
          <button
            onClick={() => setColor("white")}
            className="px-4 py-2 rounded text-black bg-white border hover:bg-gray-100"
          >
            White
          </button>
          <button
            onClick={() => setColor("lavender")}
            className="px-4 py-2 rounded text-white"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="px-4 py-2 rounded text-black bg-yellow-400 hover:bg-yellow-500"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("blueAsh")}
            className="px-4 py-2 rounded text-white"
            style={{ backgroundColor: "#7393B3" }}
          >
            Blue Ash
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
