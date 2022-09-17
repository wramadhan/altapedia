import React from "react";

const MainProfile = ({ edit, email, username, name, foto }) => {
  return (
    <div className="flex mt-10">
      <div
        className="rounded-full grid place-content-center w-24 h-24"
        style={{
          backgroundImage: `url(${
            foto
              ? foto
              : "https://p4.wallpaperbetter.com/wallpaper/344/966/486/peaky-blinders-wallpaper-preview.jpg"
          })`,
        }}
      >
        <input
          type="file"
          className="bg-transparent w-full h-full"
          onChange={edit}
        />
      </div>
      <div className="mt-2 ml-6">
        <h2 className="text-3xl font-semibold text-[#1B345F]">{name}</h2>
        <h2 className="text-xl font-semibold text-[#1B345F]">{username}</h2>
        <h3 className="text-[#DBE5FA] text-base font-medium">{email}</h3>
      </div>
    </div>
  );
};

export default MainProfile;
