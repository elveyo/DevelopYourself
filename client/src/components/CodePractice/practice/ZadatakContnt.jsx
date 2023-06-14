import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { BiSun } from "react-icons/bi";
import Rezultati from "./Rezultati";
import CompilingLoader from "./isCompilingLoader/CompilingLoader";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RiQuestionnaireLine } from "react-icons/ri";
import { LuBookMarked } from "react-icons/lu";
import {
  LuLayoutDashboard,
  LuUser,
  LuLogOut,
  LuCheckSquare,
  LuText,
  LuSwords,
} from "react-icons/lu";
import { AiOutlinePicture } from "react-icons/ai";
const ZadatakContent = ({
  Zadaci,
  zadatakIndex,
  testCode,
  rezultati,
  kodovi,
  isCompiling,
  saveCodeChange,
  promijeniPrikaz,
  prikazContent,
  colors,
}) => {
  //-------------- zadaci --------------//
  const [theme, setTheme] = useState("light");
  const [tpIndex, setTpIndex] = useState(0); //test primer index

  return (
    //container
    <div className="container w-[80%]  m-5 rounded-md flex flex-wrap h-[95vh] min-w-[900px] max-[1537]:min-h-[800px]">
      <nav className="w-[98%] ml-[1%] text-center bg-[#677CC8] rounded-md mb-1 relative flex flex-wrap space-x-10">
        <Link
          to="/code-practice"
          className="flex flex-wrap text-[#677CC8] bg-white m-1 p-1 rounded-md w-32 justify-center hover:opacity-90 shadow-md shadow-gray-700"
        >
          Dashboard <FaArrowLeft className="mt-1" />
        </Link>
        <button className="flex flex-wrap text-[#677CC8] bg-white m-1 p-1 rounded-md w-32 justify-center hover:opacity-90 shadow-md shadow-gray-700">
          My history
          <LuBookMarked className="mt-1" />
        </button>
        <button className="flex flex-wrap text-[#677CC8] bg-white m-1 p-1 rounded-md w-32 justify-center hover:opacity-90 shadow-md shadow-gray-700">
          FAQ
          <RiQuestionnaireLine className="mt-1" />
        </button>
        <Link
          to="/"
          className="flex flex-wrap text-[#677CC8] bg-white m-1 p-1 rounded-md w-32 justify-center hover:opacity-90 shadow-md shadow-gray-700"
        >
          LogOut
          <LuLogOut className="mt-1 ml-1" />
        </Link>
      </nav>
      {/*---------------CODE EDITOR--------------- */}
      <div className="bg-[#677CC8] h-[97%] ml-3 w-[30%]  min-w-[350px] relative max-2xl:min-h-[600px] min-h-[628px] rounded-md">
        <p className="pl-2 text-white font-bold text-lg">Code Editor:</p>
        <button
          className="absolute right-3 top-1 text-slate-700 bg-white w-6 h-6 text-center rounded-full
          hover:bg-black hover:text-blue-200"
          onClick={() => setTheme(theme === "vs-dark" ? "light" : "vs-dark")}
        >
          <BiSun className="m-1" />
        </button>
        <Editor
          language="cpp"
          theme={theme}
          defaultValue={kodovi[zadatakIndex]}
          onChange={(value) => {
            saveCodeChange(value);
          }}
          value={kodovi[zadatakIndex]}
          className="h-[80%] w-[325px] p-1 "
        />
        <button
          className="w-[95%] left-[2.5%] bg-white border-2 border-white text-[#3c6e71] uppercase font-bold
           rounded-md absolute bottom-[65px] hover:opacity-70"
          onClick={testCode}
          disabled={isCompiling}
        >
          Test Code
        </button>
        {/* ............rezultati............ */}
        {isCompiling && (
          <div
            className="bg-[#d9d9d9] w-[calc(100%-8px)] left-1 h-[190px]
           absolute top-[428px] pt-8 text-center"
          >
            <p className="">Code is compiling...</p>
            <CompilingLoader />
          </div>
        )}
        <Rezultati colors={colors}></Rezultati>
      </div>
      {/* ---------------TEKST I POSTAVKA ZADATKA--------------- */}
      <div
        className="h-[97%] w-[calc(90%-300px)] bg-[#677CC8] overflow-y-auto 
      ml-10 border-2 border-white rounded-md relative max-[1996px]:w-[calc(50%-300px)] flex flex-wrap"
      >
        <button
          className="bg-white rounded-md text-[#677CC8] p-1 w-32 m-2 border-2 h-8
           border-[#677CC8] shadow-gray-800 shadow-md
           flex flex-wrap justify-evenly hover:opacity-90"
          onClick={() => promijeniPrikaz("tekstZadatka")}
        >
          Text
          <LuText className="mt-1 ml-1" />
        </button>
        <button
          className="bg-white rounded-md text-[#677CC8] p-1 w-32 m-2 border-2 h-8
          border-[#677CC8] shadow-gray-800 shadow-md
          flex flex-wrap justify-evenly hover:opacity-90"
          onClick={() => promijeniPrikaz("usloviZadatka")}
        >
          Conditions
          <LuCheckSquare className="mt-1 ml-1" />
        </button>
        <button
          className="bg-white rounded-md text-[#677CC8] p-1 w-32 m-2 border-2 h-8
          border-[#677CC8] shadow-gray-800 shadow-md
          flex flex-wrap justify-evenly hover:opacity-90"
          onClick={() => promijeniPrikaz("slika")}
        >
          Pictures
          <AiOutlinePicture className="mt-1 ml-1" />
        </button>
        <textarea
          readOnly={true}
          value={prikazContent}
          id="tekst"
          className=" ml-[1%] w-[98%] h-[50%] p-2 border-2 border-white rounded-md"
        ></textarea>
        {/* ..............Test primjeri.............. */}
        <div className="mb-0 pb-0 flex justify-evenly flex-wrap">
          <button
            className="m-1 text-[#677CC8] bg-gray-100 border-2 font-bold border-white p-1 rounded-md w-[45%] 
            hover:opacity-90 hover:text-bold
            shadow-gray-800 shadow-lg
            flex flex-wrap justify-center"
            onClick={() => setTpIndex((3 + tpIndex - 1) % 3)}
          >
            <FaArrowLeft className="mt-1 mr-2" />
            Preavious test case
          </button>

          <button
            className="m-1  text-[#677CC8] bg-gray-100 border-2 font-bold border-white p-1
             rounded-md w-[45%] hover:opacity-90
             shadow-gray-800 shadow-lg
            flex flex-wrap justify-center"
            onClick={() => setTpIndex((tpIndex + 1) % 3)}
          >
            Next test case
            <FaArrowRight className="mt-1 ml-2" />
          </button>
          <p className="pl-[1%] text-white font-bold">Ulazni podaci:</p>
          <textarea
            readOnly={true}
            value={Zadaci[zadatakIndex].testPrimjeri[tpIndex].ulaz}
            className="w-[98%] m-1 bg-[#d9d9d9] rounded-md p-1 font-mono"
          ></textarea>
          <p className="pl-[1%] text-white font-bold">Izlaz:</p>
          <textarea
            readOnly={true}
            value={
              Zadaci[zadatakIndex].testPrimjeri[tpIndex].izlaz === ""
                ? parseInt(Math.random() * 10 + 2)
                : Zadaci[zadatakIndex].testPrimjeri[tpIndex].izlaz
            }
            className="w-[98%] m-1 bg-[#d9d9d9] rounded-md p-1 font-mono"
          />
        </div>
      </div>
    </div>
  );
};
export default ZadatakContent;
