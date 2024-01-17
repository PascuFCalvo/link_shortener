"use client";
import { useState } from "react";
import InputShortener from "./inputShortener";
import LinkResult from "./result";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className=" w-screen h-screen flex flex-col items-center justify-center content-center bg-gradient-to-r from-red-500/50 to-pink-500/50">
        <InputShortener setInputValue={setInputValue} />
        <LinkResult inputValue={inputValue} />
      </div>
    </>
  );
}
