import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFileBarGraphFill } from "react-icons/bs";

function UserStats() {
  return (
    <div className="grid grid-cols-3 gap-x-6 mb-8">
      <div className="form-clr px-10 py-6 rounded-2xl box-shadow">
        <h3 className="flex items-center justify-center mb-3">
          <IoIosAddCircle className="text-2xl darkMidText" /> &nbsp; Post Added
        </h3>
        <div className="border flex items-center justify-center py-6 px-2">
          content
        </div>
      </div>
      <div className="form-clr px-10 py-6 rounded-2xl box-shadow">
        <h3 className="flex items-center justify-center mb-3">
          <AiFillCheckCircle className="text-2xl darkMidText" /> &nbsp; Picks
          Won
        </h3>
        <div className="border flex items-center justify-center py-6 px-2">
          content
        </div>
      </div>
      <div className="form-clr px-10 py-6 rounded-2xl box-shadow">
        <h3 className="flex items-center justify-center mb-3">
          <BsFileBarGraphFill className="text-2xl darkMidText" /> &nbsp; Win
          Percentage
        </h3>
        <div className="border flex items-center justify-center py-6 px-2">
          content
        </div>
      </div>
    </div>
  );
}

export default UserStats;
