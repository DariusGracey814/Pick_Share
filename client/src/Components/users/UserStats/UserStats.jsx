import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFileBarGraphFill } from "react-icons/bs";

function UserStats() {
  return (
    <div className="grid grid-cols-3 gap-x-6 user-stats">
      <div className="form-clr px-6 py-6 rounded-2xl box-shadow stat-stack">
        <h3 className="flex items-center justify-center mb-3 h3-stat">
          <IoIosAddCircle className="text-2xl darkMidText" /> &nbsp; Picks Added
        </h3>
        <p className="stats text-center">0</p>
      </div>
      <div className="form-clr px-6 py-6 rounded-2xl box-shadow stat-stack">
        <h3 className="flex items-center justify-center mb-3 h3-stat">
          <AiFillCheckCircle className="text-2xl darkMidText" /> &nbsp; Picks
          Won
        </h3>
        <p className="stats text-center">0</p>
      </div>
      <div className="form-clr px-6 py-6 rounded-2xl box-shadow stat-stack">
        <h3 className="flex items-center justify-center mb-3 h3-stat">
          <BsFileBarGraphFill className="text-2xl darkMidText" /> &nbsp; Win
          Rate
        </h3>
        <p className="stats text-center">0%</p>
      </div>
    </div>
  );
}

export default UserStats;
