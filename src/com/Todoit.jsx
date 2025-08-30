import React, { useState } from "react";

export default function Todoit() {
  const [vol, setVol] = useState(100);     // font size
  const [col, setCol] = useState(10);      // color hue
  const [open, setOpen] = useState(false); // show/hide sliders
  const [text, setText] = useState(0);     // color slider

  const applyCol = (e) => {
    setText(e.target.value);
  };

  const handleChange = (e) => {
    const newVal = e.target.value;
    setVol(newVal);
    setCol(newVal);
  };

  return (
    <div className="min-h-screen bg-slate-200 flex flex-col items-center justify-start p-6">
      <button
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow transition mb-4"
        onClick={() => setOpen(!open)}
      >
        Toggle Range
      </button>

      {open && (
        <div className="w-full max-w-xl bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 p-6 rounded-lg shadow-lg flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-white font-semibold">Font Size: {vol}px</label>
            <input
              type="range"
              min="10"
              max="100"
              value={vol}
              onChange={handleChange}
              className="range accent-cyan-600"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white font-semibold">Text Color Hue: {text}°</label>
            <input
              type="range"
              min="0"
              max="360"
              value={text}
              onChange={applyCol}
              className="range accent-pink-600"
            />
          </div>
        </div>
      )}

      <div
        className="mt-10 text-center transition-all duration-300"
        style={{
          fontSize: `${col}px`,
          color: `hsl(${text}, 100%, 50%)`,
        }}
      >
        <h3 className="font-semibold">Hi, how are you?</h3>
      </div>
    </div>
  );
}
