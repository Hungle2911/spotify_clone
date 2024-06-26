import React from "react";

const NavBarLibrary = () => {
  return (
    <div className="bg-[#121212] h-[85%] rounded">
      <div className="p-4 flex items-center justify-between">
        <div className="flex gap-3">
          <i className="fa-solid fa-book pl-7 mt-3 mr-1 fa-xl" />
          <p className="font-bold">Your Library</p>
        </div>
      </div>
    </div>
  );
};

export default NavBarLibrary;
