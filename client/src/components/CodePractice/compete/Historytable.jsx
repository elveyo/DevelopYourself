import React from "react";
import { IoMdCloseCircle, IoIosCheckmarkCircle } from "react-icons/io";

const users = [
  "Adnan Galijasevic",
  "Elvir Agic",
  "Adem Drpic",
  "Almin Mujanovic",
  "Abdullah Mrkonjic",
];
let tableData = [];
for (let i = 0; i < 10; i++) {
  let win = Math.floor(Math.random() * 100) % 2;
  let points = Math.floor(Math.random() * 20);
  tableData.push(
    <tr key={i} className="odd:bg-white odd:text-[#0F1736] rounded-tl-lg">
      <th className=" w-auto even:text-white rounded-l-lg">
        <button
          className="rounded-md border-2 p-1 my-1"
          style={{
            border: i % 2 ? "solid 1px #fff" : "solid 1px #677CC8",
          }}
        >
          {users[Math.floor(Math.random() * users.length)]}
        </button>
      </th>
      <th
        className="m-1 p-1 font-bold w-1/5"
        style={{ color: win ? "green" : "red" }}
      >
        <p className="bg-white rounded-full w-20 ml-[50%] -translate-x-[50%]">
          {win ? "WIN" : "LOSS"}
        </p>
      </th>
      <th>
        {win ? "+" : "-"} {points}
      </th>
      <th className="w-32 rounded-r-lg">
        <button
          className="w-1/2 text-center p-1 rounded-md border-2"
          style={{
            border: i % 2 ? "solid 1px #fff" : "solid 1px #677CC8",
          }}
        >
          SEE RESULTS
        </button>
      </th>
    </tr>
  );
}

const Historytable = () => {
  return (
    <div className="w-[95%] ml-[2.5%] my-3 bg-gray-200 mb-8 rounded-md pb-5 relative mt-10">
      <h2 className="ml-[50%] -translate-x-1/2 w-36 text-center font-bold text-lg p-2">
        Last 10 battles
      </h2>
      <table className="w-[80%] ml-[10%]  shadow-xl shadow-gray-800 odd:rounded-lg table-fixed rounded-lg bg-transparent">
        <thead className="text-center bg-[#677CC8] text-white mb-2">
          <th className="rounded-l-lg">Opponent</th>
          <th className="">Result</th>
          <th className="">Points</th>
          <th className="rounded-r-lg">See problem</th>
        </thead>
        <tbody className="text-center bg-[#677CC8] text-white">
          {tableData}
        </tbody>
      </table>
    </div>
  );
};

export default Historytable;
