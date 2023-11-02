import React from "react";
import { oyats } from "../oyats";
function Oyats() {
  let oyat = oyats[Math.ceil(Math.random() * oyats.length - 1)];
  console.log(Math.ceil(Math.random() * oyats.length));
  return (
    <div className="bg-[#E3DEFF] p-2 rounded-md">
      <p>{oyat?.text}</p>
      <p>{oyat?.num}</p>
    </div>
  );
}

export default Oyats;
