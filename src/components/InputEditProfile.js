import React from "react";

const InputEditProfile = ({ name, type, placeholder, instruction }) => {
  return (
    <div className="flex">
      <label className="w-52 text-lg font-medium" to={name}>
        {name}
      </label>
      <div className="w-full">
        <input
          className="focus:outline-none focus:border-[#F7731C] focus:bg-[#DBE5FA] focus:ring-[#F7731C] w-full rounded-md border-[#DBE5FA] border-[1px] p-4"
          type={type}
          placeholder={placeholder}
          name={name}
        />
        <p className="mt-3 text-[#CCCCCC] text-xs">{instruction}</p>
      </div>
    </div>
  );
};

export default InputEditProfile;
