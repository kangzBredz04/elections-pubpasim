import { MdHome } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="bg-[#d8c3a5] fixed lg:static lg:translate-x-0 z-20 lg:bg-none lg:bg-transparent rounded-r-2xl flex flex-col gap-4 ease-in-out duration-200 w-80 lg:w-2/5 h-full px-3 py-4 lg:rounded-none -translate-x-full">
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
          <span className="font-bold text-gray-700">PUB</span>
        </span>
      </a>
      <nav className="flex flex-col">
        <a href="">
          <button className="pl-4 pr-6 w-full font-medium h-14 rounded-full flex gap-3 items-center hover:bg-on-surface hover:bg-opacity-5">
            <MdHome className="text-2xl" />
            <span className="text-sm">Beranda</span>
          </button>
        </a>
        <a href="">
          <button className="pl-4 pr-6 w-full font-medium h-14 rounded-full flex gap-3 items-center hover:bg-on-surface hover:bg-opacity-5">
            <span className="text-2xl">
              <BsFillPeopleFill className="text-2xl" />
            </span>
            <span className="text-sm">Kandidat</span>
          </button>
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;
