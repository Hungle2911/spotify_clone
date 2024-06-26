import NavBarLibrary from "./NavBarLibrary";

const SideNavBar = () => {
  return (
    <div className="w-[20%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <i className="fa-solid fa-house mr-2 fa-xl" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <i className="fas fa-search mr-2 fa-xl" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <NavBarLibrary />
    </div>
  );
};

export default SideNavBar;
