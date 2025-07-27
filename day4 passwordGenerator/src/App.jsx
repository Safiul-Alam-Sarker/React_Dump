import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
    }

    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1) - 1);
    }

    setPassword(pass);
  }, [setPassword, length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="p-5 items-center justify-center bg-gray-500">
        <div>
          <h1 className="text-white text-center font-bold text-3xl">
            Password Generator
          </h1>
        </div>

        <div className="rounded flex border-[3px] border-blue-500">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full p-1 bg-gray-100 border text-black cursor-default"
            ref={passwordRef}
          />
          <button
            className="p-1 px-2 bg-blue-600 text-xl font-bold text-white hover:bg-blue-800 cursor-pointer"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="range"
            max={30}
            min={6}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="text-white px-2"> Length {length}</label>

          <input
            type="checkbox"
            value={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label className="text-white px-2"> Number </label>
          <input
            type="checkbox"
            value={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label className="text-white px-2"> Special Character </label>
        </div>
      </div>
    </>
  );
}

export default App;
