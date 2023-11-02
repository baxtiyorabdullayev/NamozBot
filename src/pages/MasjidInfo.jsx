import React from "react";
import { masjidName } from "../data";
import { useParams } from "react-router-dom";
import { FaMosque } from "react-icons/fa";
import Oyats from "../components/Oyats";

function MasjidInfo() {
  const { id } = useParams();
  const findId = masjidName.find((element) => element.id === +id);
  const data = new Date();

  return (
    <div className="mt-14 ">
      <div className="flex border-b-2 pb-4 border-[#29918ab7]">
        {findId.image ? (
          <img
            src={findId.image}
            className="w-[90px] h-[75px] mr-3 rounded-md"
            alt="updating.."
          />
        ) : (
          <FaMosque className="w-[90px] h-[75px] mr-3 text-[#39999299]" />
        )}{" "}
        <div>
          <p className="m-1 text-[#2E2955] text-xl font-montserrat font-semibold">
            {findId.title}
          </p>
          <span className="py-1 px-2 rounded-md bg-[#29918ab7] text-white">
            жомеъ масжиди
          </span>
        </div>
      </div>
      <p className=" bg-[#c66c6c79] my-3 text-2xl p-2 text-center rounded-md">
        Охирги янгиланиш: {findId.update}
      </p>
      <div className="flex justify-between bg-[#E3DEFF] mx-4 p-3 rounded-md text-3xl">
        <p className="font-montserrat ">Бомдод: </p>
        <p className="font-bold">{findId.bomdod}</p>
      </div>
      <div className="flex justify-between bg-[#E3DEFF] m-4 p-3 rounded-md text-3xl">
        <p className="font-montserrat">Пешин: </p>
        <p className="font-bold">{findId.peshin}</p>
      </div>
      <div className="flex justify-between bg-[#E3DEFF] m-4 p-3 rounded-md text-3xl">
        <p className="font-montserrat">Аср: </p>
        <p className="font-bold">{findId.asr}</p>
      </div>
      <div className="flex justify-between bg-[#E3DEFF] m-4 p-3 rounded-md text-3xl">
        <p className="font-montserrat">Шом: </p>
        <p className="font-bold">{findId.shom}</p>
      </div>
      <div className="flex justify-between bg-[#E3DEFF] m-4 p-3 rounded-md text-3xl">
        <p className="font-montserrat">Хуфтон: </p>
        <p className="font-bold">{findId.xufton}</p>
      </div>
      {/* <Oyats /> */}
    </div>
  );
}

export default MasjidInfo;
