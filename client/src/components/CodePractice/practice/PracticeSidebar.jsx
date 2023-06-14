import React from "react";
const PraccticeSidebar = ({
  Zadaci,
  promijeniZadatak,
  zadatakIndex,
  colors,
  brojIspravnih,
}) => {
  let completionColors = new Array(Zadaci.length).fill("rgb(255,255,255)");
  for (let i = 0; i < colors.length; i++) {
    if (colors[i][0] === "rgb(107,114,128)") continue;
    if (
      colors[i][0] === "#2bc016" && //tacna sva tri test primjera
      colors[i][0] === colors[i][1] &&
      colors[i][0] === colors[i][2]
    )
      completionColors[i] = "green";
    else if (
      colors[i][0] === "#ea2b1f" && //tacna sva tri test primjera
      colors[i][0] === colors[i][1] &&
      colors[i][0] === colors[i][2]
    )
      completionColors[i] = "red";
    else completionColors[i] = "orange";
  }
  const listaZadataka = [];
  for (let i = 0; i < Zadaci.length; i++) {
    listaZadataka.push(
      <li
        className="rounded-md m-1 mt-3 pl-1"
        key={i}
        style={{
          backgroundColor: i === zadatakIndex ? "#a5a5a5" : "white",
          border: i === zadatakIndex ? "solid white 1px" : "solid #353535 1px",
        }}
      >
        <button
          className="w-full h-full text-left relative text-[#0F1736]"
          onClick={() => promijeniZadatak(i)}
        >
          {Zadaci[i].imeZadatka}
          <div
            className="rounded-full border-2 border-black w-[10px] h-[10px] absolute right-1 top-[6px]"
            style={{ backgroundColor: completionColors[i] }}
          ></div>
        </button>
      </li>
    );
  }
  return (
    <div className="student-zadaci bg-[#677CC8] w-[15%] h-[95vh] mt-5 ml-5 pl-[1.5%] pt-4 rounded-md min-h-[650px] relative shadow-xl shadow-gray-600">
      <p className="text-white font-bold text-2xl uppercase">Zadaci</p>

      <ul className="border-white border-2 w-[90%] h-[85%] overflow-y-auto z-10 rounded-md">
        {listaZadataka}
      </ul>
      <div className="img-bcg2 absolute right-[calc(50%-5rem)] bottom-[120px] h-32 w-40 z-0 opacity-95" />
      <p className=" w-[90%] text-center text-white text-lg uppercase font-semibold tracking-wider">
        Compleated: {brojIspravnih}/{Zadaci.length * 3}
      </p>
    </div>
  );
};
export default PraccticeSidebar;
