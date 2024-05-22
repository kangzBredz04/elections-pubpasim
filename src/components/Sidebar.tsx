import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-surface1 fixed lg:static lg:translate-x-0 z-20 lg:bg-none lg:bg-transparent rounded-r-2xl flex flex-col gap-4 ease-in-out duration-200 w-80 lg:w-64 h-full px-3 py-4 lg:rounded-none -translate-x-full">
      <a href="" className="flex items-center gap-2">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M18 13h-.68l-2 2h1.91L19 17H5l1.78-2h2.05l-2-2H6l-3 3v4c0 1.1.89 2 1.99 2H19a2 2 0 002-2v-4l-3-3zm-1-5.05l-4.95 4.95-3.54-3.54 4.95-4.95L17 7.95zm-4.24-5.66L6.39 8.66a.996.996 0 000 1.41l4.95 4.95c.39.39 1.02.39 1.41 0l6.36-6.36a.996.996 0 000-1.41L14.16 2.3a.975.975 0 00-1.4-.01z"></path>
        </svg>
        <span className="text-xl display">
          <span>Pemilu</span>{" "}
          <span className="font-bold text-gray-700">RI</span>
        </span>
      </a>
      <nav className="flex flex-col">
        <a href="">
          <button className="pl-4 pr-6 w-full font-medium h-14 rounded-full flex gap-3 items-center hover:bg-on-surface hover:bg-opacity-5">
            <span className="text-2xl">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
              </svg>
            </span>
            <span className="text-sm">Beranda</span>
          </button>
        </a>
        <a href="">
          <button className="pl-4 pr-6 w-full font-medium h-14 rounded-full flex gap-3 items-center hover:bg-on-surface hover:bg-opacity-5">
            <span className="text-2xl">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"></path>
              </svg>
            </span>
            <span className="text-sm">Kandidat</span>
          </button>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
