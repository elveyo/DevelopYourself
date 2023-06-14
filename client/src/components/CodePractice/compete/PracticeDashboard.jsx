import React from "react";
import { FaLaptopCode, FaArrowLeft } from "react-icons/fa";
import { RiSwordLine, RiQuestionnaireLine } from "react-icons/ri";
import { LuBookMarked } from "react-icons/lu";
import Historytable from "./Historytable";
import { Link } from "react-router-dom";
const PracticeDashboard = () => {
  return (
    <>
      <h1 className="w-full text-center text-2xl mt-10">
        Practice coding skills
      </h1>
      <main className="flex flex-wrap justify-evenly">
        <nav className="w-[95%] m-[2.5%] rounded-md bg-[#677CC8] flex flex-wrap space-x-10 text-[#0F1736]  shadow-gray-800 shadow-md mb-20">
          <button className="flex flex-wrap bg-slate-50 m-1 p-1 rounded-md w-32 justify-center">
            Dashboard <FaArrowLeft className="mt-1" />
          </button>
          <button className="flex flex-wrap bg-white m-1 p-1 rounded-md w-32 justify-center">
            My history
            <LuBookMarked className="mt-1" />
          </button>
          <button className="flex flex-wrap bg-white m-1 p-1 rounded-md w-32 justify-center">
            FAQ
            <RiQuestionnaireLine className="mt-1" />
          </button>
        </nav>
        <div className="min-h-1/3 w-[40%] rounded-md text-center text-white bg-[#677CC8]  shadow-gray-800 shadow-xl">
          <h3 className="text-xl m-2">Solo practice</h3>
          <hr className="w-[80%] ml-[10%]" />
          <p className="leading-10">
            Practice solo in solving tasks on your own
            <br />
            New task aded every day
            <br />
            AI judging system
            <br />
            From begginer to expert
            <br />
          </p>
          <Link
            to="/practice"
            className="w-24 m-3 bg-blue-900 rounded-md border-2 border-white
           hover:bg-white hover:border-[#0F1736] hover:text-[#0F1736] 
           flex flex-wrap justify-evenly
           ml-[50%] -translate-x-[50%]"
          >
            Practice <FaLaptopCode className="mt-1" />
          </Link>
        </div>
        {/* ------------------------------ */}
        <div className="min-h-1/3 w-[40%] rounded-md text-center text-white bg-[#677CC8] shadow-gray-800 shadow-xl">
          <h3 className="text-xl m-2">1v1 battle</h3>
          <hr className="w-[80%] ml-[10%]" />
          <p className="leading-10">
            Compete against other people
            <br />
            Earn points
            <br />
            Time rush/better optimization
            <br />
          </p>
          <button
            className="w-24 m-3 bg-blue-900 rounded-md border-2 border-white
           hover:bg-white hover:border-[#0F1736] hover:text-[#0F1736] 
           flex flex-wrap justify-evenly
           ml-[50%] -translate-x-[50%] transition-transform"
          >
            <Link
              to="/1v1"
              className="w-full h-full flex flex-wrap justify-evenly"
            >
              Compete
              <RiSwordLine className="mt-1" />
            </Link>
          </button>
        </div>
      </main>
      <Historytable />
    </>
  );
};

export default PracticeDashboard;
