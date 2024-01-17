import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const LinkResult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");

  const API_KEY = "sk_16edaec78bc44fd8a3e47fb0124abd47";

  const inputBody = JSON.stringify({
    url: inputValue,
  });

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-api-key": API_KEY,
  };

  const fetchData = async () => {
    const response = await fetch(
      "https://api.manyapis.com/v1-create-short-url",
      {
        method: "POST",
        body: inputBody,
        headers: headers,
      }
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (body) {
        console.log(body);
        setShortenLink(body.shortUrl);
      });

    console.log(shortenLink);
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  return (
    <>
      {shortenLink && (
        <div className="result">
          <p className="text-xl">{shortenLink}</p>
          <CopyToClipboard
            text={shortenLink}
            className="mt-10 bg-red-400 rounded-md p-6 hover:bg-red-600"
          >
            <button className="">Copy to Clipboard</button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default LinkResult;
