import React, { useEffect, useState } from "react";
import JsEditor from "./JsEditor";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

const AdnanGalijasevic = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const [isEditorVisible, setIsEditorVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const changeHeight = () => {
    setIsEditorVisible((prevVisible) => !prevVisible);
    setCss(css);
    setJs(js);
    setHtml(html);
  };

  return (
    <div className="w-full h-full bg-white">
      <nav className="w-[98%] h-8 rounded-full bg-[#677CC8] m-[1%] mt-6 relative flex flex-wrap">
        <img
          src="https://avatars.githubusercontent.com/u/97401156?s=400&u=4ab0eb1cf32b07ea571a0b2a7a529b8c278377ac&v=4"
          className="w-20 h-20 rounded-full absolute top-[-70%] left-8"
          alt="Profile"
        ></img>
        <p className="ml-32 pt-1 font-bold text-white">Adnan Galijasevic</p>
        <div className="flex flex-wrap ml-3 rounded-full border-2 border-white p-1 h-[95%] mt-px space-x-2 w-96 justify-evenly absolute right-px">
          <p className="text-white">Practice score: 1324</p>
          <p className="text-white">1v1 score: 1566</p>
        </div>
        <p className="absolute right-1/2 translate-x-[50%] font-bold text-white">
          Develop Yourself
        </p>
      </nav>
      <main className="h-auto">
        <div className="pane top-pane flex flex-wrap justify-evenly mt-7 bg-gray-200 relative">
          <button
            className="absolute right-3 z-10 border-2 border-white bg-[#677CC8] pl-1 pr-1 rounded-md text-white top-px"
            onClick={changeHeight}
          >
            Show/Hide
          </button>
          {isEditorVisible && (
            <>
              <div className="w-[33%] mt-2">
                <p className="bg-gray-900 text-red-600 pl-1 w-32 flex flex-wrap">
                  <FaHtml5 className="mt-1 mr-1" />
                  HTML
                </p>
                <JsEditor language={"html"} setHtml={setHtml} />
              </div>
              <div className="w-[33%] mt-2">
                <p className="bg-gray-900 text-white pl-1 w-32 flex flex-wrap">
                  <FaCss3Alt className="mt-1 mr-1" />
                  CSS
                </p>
                <JsEditor language={"css"} setCss={setCss} />
              </div>
              <div className="w-[33%] mt-2">
                <p className="bg-gray-900 text-yellow-600 pl-1 w-32 flex flex-wrap">
                  <FaJsSquare className="mt-1 mr-1" />
                  JS
                </p>
                <JsEditor language={"javascript"} setJs={setJs} />
              </div>
            </>
          )}
        </div>
        <div className="h-auto">
          <iframe
            title="output"
            sandbox="allow-scripts"
            className="w-full border-none h-auto min-h-[1000px]"
            srcDoc={srcDoc}
          />
        </div>
      </main>
    </div>
  );
};

export default AdnanGalijasevic;
