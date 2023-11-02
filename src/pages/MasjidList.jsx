import React from "react";
import { masjidName } from "../data";
import InfoBanner from "../components/InfoBanner";
import MasjidName from "../components/MasjidName";
import Author from "../components/Author";

function MasjidList() {
  return (
    <div>
      <InfoBanner />
      {masjidName.map((element, index) => (
        <MasjidName {...element} key={index} />
      ))}
      <Author />
    </div>
  );
}

export default MasjidList;
