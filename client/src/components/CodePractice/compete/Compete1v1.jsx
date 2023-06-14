import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { Link } from "react-router-dom";
import {
  LuLayoutDashboard,
  LuUser,
  LuLogOut,
  LuCheckSquare,
  LuText,
  LuSwords,
} from "react-icons/lu";
import Rezultati from "../practice/Rezultati";

const defaultCode = `
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
int main()
{
  return 0;
}`;
const colors = ["rgb(107,114,128)", "rgb(107,114,128)", "rgb(107,114,128)"];
const Compete1v1 = () => {
  return (
    // wrapper
    <div className="w-full h-full flex flex-wrap bg-gray-200 mb-4">
      {/* naslov */}
      <header className="w-full">
        <h1 className="ml-[50%] -translate-x-1/2 text-center text-3xl font-mono m-10">
          1v1 Coding Challenge
        </h1>
        <nav className="bg-[#677CC8] w-[95%] ml-[2.5%] rounded-md shadow-md shadow-gray-800">
          <ul className="inline-flex ml-px space-x-10">
            <li className="bg-white text-[#677CC8] rounded-md p-1 m-1">
              <button className="flex flex-wrap justify-center w-32">
                Dashboard
                <LuLayoutDashboard className="mt-1 ml-1" />
              </button>
            </li>
            <li className="bg-white text-[#677CC8] rounded-md p-1 m-1">
              <button className="flex flex-wrap justify-center w-32">
                Profile
                <LuUser className="mt-1 ml-1" />
              </button>
            </li>
            <li className="bg-white text-[#677CC8] rounded-md p-1 m-1">
              <Link to="/" className="flex flex-wrap justify-center w-32">
                Logout
                <LuLogOut className="mt-1 ml-1" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* ############### tekst i postavka zadataka ############### */}
      <div
        className="w-[95%] ml-[2.5%] grid mb-10 mt-5  bg-white rounded-xl min-h-[300px] h-auto
      border-2 border-[#677CC8] shadow-lg shadow-gray-800"
      >
        <select className="w-36 ml-10 mt-2 text-[#] border-2 border-[#677CC8] rounded-md">
          <option>Time rush</option>
          <option>Code optimization</option>
          <option>SQL (comming soon...)</option>
          <option>CSS (comming soon...)</option>
        </select>
        <button
          className="bg-white rounded-md text-[#677CC8] w-32 place-self-center mt-4 border-2
         border-[#677CC8] font-bold shadow-gray-800 shadow-md
         flex flex-wrap justify-evenly"
        >
          Find opponent
          <LuSwords className="mb-1" />
        </button>
        {/* -------------- dugmad za prebacivanje konteksta ---------- */}
        <div className="flex justify-evenly">
          <button
            className="bg-white rounded-md text-[#677CC8] p-1 w-32 m-2 border-2
           border-[#677CC8] shadow-gray-800 shadow-md
           flex flex-wrap justify-evenly"
          >
            Text
            <LuText className="mt-1 ml-1" />
          </button>
          <button
            className="bg-white rounded-md text-[#677CC8] p-1 w-32 m-2 border-2
           border-[#677CC8] shadow-gray-800 shadow-md
           flex flex-wrap justify-evenly"
          >
            Conditons
            <LuCheckSquare className="mt-1 ml-1" />
          </button>
        </div>
        {/* --------------- text area za tekst/uslove ---------------- */}
        <textarea
          readOnly={true}
          placeholder={"Problem text goes here"}
          className="w-[80%] ml-[10%] p-2 bg-gray-100 rounded-md border-2 border-[#677CC8]"
        />
        <p className="text-center text-white">Input:</p>
        <textarea
          readOnly={true}
          placeholder={"Input example"}
          className="w-[80%] ml-[10%] p-2 bg-gray-100 rounded-md border-2 border-[#677CC8]"
        />
        <p className="text-center text-white">Output:</p>
        <textarea
          readOnly={true}
          placeholder={"Output example"}
          className="w-[80%] ml-[10%] p-2 mb-4 bg-gray-100 rounded-md border-2 border-[#677CC8]"
        />
      </div>
      {/* ------------ code editors ------------- */}
      <main className="w-[95%] ml-[2.5%] flex flex-wrap justify-evenly bg-[#677CC8] relative rounded-xl shadow-2xl shadow-gray-800 mb-20">
        <header>
          <p className="absolute right-1 top-1 bg-white rounded-md p-1 w-32 z-10">
            User 2
          </p>
          <p className="absolute left-1 top-1 bg-white rounded-md p-1 w-32 z-10">
            User 1
          </p>
        </header>
        {/* ----------------- user code editor ---------------- */}
        <div className="w-[600px] h-[600px] bg-[#677CC8] p-5 m-5">
          <Editor
            language="cpp"
            theme="vs-dark"
            className="h-[550px]"
            defaultValue={defaultCode}
          />
        </div>
        {/* ---------------- oponent code editor -------------- */}
        <div className="w-[600px] h-[600px] bg-[#677CC8] p-5 m-5 blur-[6px] pointer-events-none">
          <Editor className="h-[550px]" defaultValue={defaultCode} />
        </div>
        {/* ----------- button for code submitions ------------ */}
        <button className="absolute left-[8.3%] bottom-11  bg-white text-[#0F1736] border-2 p-1 rounded-md">
          Submit Code
        </button>
        {/* ------------- rezultati izvrsavanja koda ---------- */}
        <div className="w-full bg-[#677CC8] h-10 rounded-b-xl pl-10 z-10 shadow-inner shadow-white">
          <Rezultati colors={colors} />
        </div>
        {/* ------------------ vertical line ------------------ */}
        <div className="absolute left-1/2 top-0 w-px h-full bg-white" />
      </main>
    </div>
  );
};
export default Compete1v1;
