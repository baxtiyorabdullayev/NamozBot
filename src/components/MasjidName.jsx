import React from "react";
import { FaMosque } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function MasjidName({ title, location, id }) {
  const navigate = useNavigate();
  const showInfo = () => {
    navigate(`/masjidInfo/${id}`);
  };
  return (
    <div
      className="bg-[#E3DEFF]  my-2 p-2
        rounded-md   items-center cursor-pointer"
      onClick={showInfo}
    >
      <p className="m-1 text-[#2E2955] text-xl font-montserrat font-semibold">
        {title}
      </p>
      <span className="text-xs py-1 px-2 rounded-md bg-[#39999299] text-[#2E2856]">
        {`${location} масжиди`}
      </span>
    </div>
  );
}

export default MasjidName;
