"use client";

import { useState } from "react";

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };

  return (
    <div className="h-48 w-2/3 bg-neutral-200 flex flex-col items-center justify-center rounded-md ">
      <h1 className="mb-10 text-red-400 text-2xl ">
        URL <span className="text-red-600 text-4xl">SHORTENER</span>
      </h1>
      <div>
        <input
          className="text-black w-96 h-14 rounded-md pl-4"
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="text-red-400 bg-white hover:bg-neutral-100 w-36 h-14 rounded-md ml-4 border-2 border-red-400"
          onClick={handleClick}
        >
          shorten
        </button>
      </div>
    </div>
  );
};

export default InputShortener;
