import React from "react";

const MainProfile = () => {
  return (
    <div className="flex mt-10">
      <img
        className="rounded-full w-24 h-24"
        src="https://p4.wallpaperbetter.com/wallpaper/344/966/486/peaky-blinders-wallpaper-preview.jpg"
        alt="profil pengguna"
      />
      <div className="mt-2 ml-6">
        <h2 className="text-2xl font-semibold text-[#1B345F]">Jhondoe</h2>
        <h3 className="text-[#DBE5FA] text-base font-medium">
          jhondoe@gmail.com
        </h3>
      </div>
    </div>
  );
};

export default MainProfile;
