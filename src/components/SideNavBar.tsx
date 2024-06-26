import React from "react";

const SideNavBar = () => {
  return (
    <div
      id="mySidenav"
      className="sidenav hidden md:block absolute bg-black text-white top-0 right-0 h-full w-64 p-4"
    >
      <ul className="space-y-4">
        <li>
          <a className="hover:text-gray-400" href="./premium.html">
            Premium
          </a>
        </li>
        <li>
          <a className="hover:text-gray-400" href="./help.html">
            Help
          </a>
        </li>
        <li>
          <a className="hover:text-gray-400" href="./download.html">
            Download
          </a>
        </li>
        <li className="border-t border-gray-600 my-2"></li>
        <li>
          <a className="hover:text-gray-400" href="#">
            Welcome
          </a>
        </li>
        <li>
          <a className="hover:text-gray-400" href="./index.html">
            Logout
          </a>
        </li>
      </ul>
      <span className="sidenav-logo mt-4 block">
        <a href="./index.html">
          <svg
            viewBox="0 0 63 20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMin meet"
          >
            <g fillRule="evenodd" className="svelte-1gcdbl9">
              <path d="M61." fill="currentColor" />
            </g>
          </svg>
        </a>
      </span>
    </div>
  );
};

export default SideNavBar;
