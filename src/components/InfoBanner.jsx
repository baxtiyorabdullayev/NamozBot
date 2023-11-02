import React from "react";

function InfoBanner() {
  return (
    <div className="bg-[#c66c6c79] mt-14 p-2 rounded-md flex justify-between items-center">
      <p className="text-[#2E2955] font-poppins text-justify text-sm leading-6">
        Aссалому алейкум, ҳурматли фойдаланувчи ҳоззирда бот синов тариқасида
        ишлаяпти, ботдаги барча маълумотлар{" "}
        <a
          className="text-sky-600 bg-blue-200  px-1 rounded-lg text-sm"
          href="https://t.me/kosonsoynamozvaqti"
        >
          @kosonsoynamozvaqti
        </a>{" "}
        телеграм каналидан олинди
      </p>
    </div>
  );
}

export default InfoBanner;
