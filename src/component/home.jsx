import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdManageSearch } from "react-icons/md";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Home() {
  const [active, setActive] = useState(false);
  const [searchNewsTopic, setSearchNewsTopic] = useState();
  const nevigate = useNavigate();

  return (
    <>
      <header className="md:border-2 md:shadow-md md:p-2 sticky top-0 bg-white">
        <div className="flex justify-around items-center pt-2 pb-2 border-b-2 shadow-md md:border-none md:shadow-none">
          <h1 className="text-2xl font-bold">
            <Link to="/">The PersistVenture</Link>{" "}
            <span className="text-red-700">News</span>
          </h1>
          <TfiMenuAlt
            className="size-6 text-red-700 cursor-pointer md:hidden"
            onClick={() => {
              setActive((active) => !active);
              console.log(active);
            }}
          />
        </div>
        {/* nav Menu */}
        <div className={active ? "mt-3 block" : "mt-3 hidden md:block"}>
          <ul className="text-center font-bold text-lg md:flex md:justify-evenly">
            <Link
              to="/business"
              onClick={() => {
                setActive((active) => !active);
              }}
            >
              <li className="p-1 hover:text-red-700">Business</li>
            </Link>
            <Link
              to="/health"
              onClick={() => {
                setActive((active) => !active);
              }}
            >
              <li className="p-1 hover:text-red-700">Health</li>
            </Link>
            <Link
              to="/science"
              onClick={() => {
                setActive((active) => !active);
              }}
            >
              <li className="p-1 hover:text-red-700">Science</li>
            </Link>
            <Link
              to="/sports"
              onClick={() => {
                setActive((active) => !active);
              }}
            >
              <li className="p-1 hover:text-red-700">Sports</li>
            </Link>
          </ul>
        </div>

        <div className="flex justify-center md:justify-end md:me-[calc(100%-83.4%)] mt-3">
          <div className="flex items-center w-[80%] md:w-auto border-2 p-1 rounded-md">
            <input
              type="text"
              onChange={(e) => {
                setSearchNewsTopic(e.target.value);
              }}
              value={searchNewsTopic}
              placeholder="search your topic"
              className="w-96  outline-none"
            />
            <button
              onClick={() => {
                nevigate(`${searchNewsTopic}`);
                setSearchNewsTopic("");
              }}
            >
              <MdManageSearch className="size-5" />
            </button>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Home;
