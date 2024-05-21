import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="h-full p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold mb-4">Election</h1>
      <ul>
        <li className="mb-2">
          <a href="#" className="hover:underline">
            Home
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">
            Candidates
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">
            Results
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
