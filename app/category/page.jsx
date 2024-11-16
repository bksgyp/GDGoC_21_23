import React from "react";

export default function MenuAll() {
  return (
    <>
      <div className="absolute top-12 left-5 object-cover h-5 w-5">
        <img src="./pngwing.com.png" alt="menu button" />
      </div>
      <div className="flex flex-col w-full max-w-[90%] h-screen absolute top-20 left-10 px-4">
        <div className="text-left text-2xl font-bold relative top-10 pb-3">
          전체 공지사항
        </div>
        <div className="text-left text-2xl font-bold relative top-10 pb-3">
          학과 공지사항
        </div>
        <div className="text-left text-2xl font-bold relative top-10 pb-3">
          장학금 안내
        </div>
        <div className="text-left text-2xl font-bold relative top-10 pb-3">
          동아리 안내
        </div>
      </div>
    </>
  );
}
