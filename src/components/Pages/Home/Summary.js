import React from "react";
import { BsFillFlagFill } from "react-icons/bs";
import { FcBarChart } from "react-icons/fc";
import { IoIosPeople } from "react-icons/io";
import { ImCool2 } from "react-icons/im";

function Summary() {
  return (
    <>
      <div className="bg-white text-center pt-20 pb-20">
        <h1 className="text-black uppercase">
          Thousand Of Business <span className="text-cyan-500">Trust Us</span>
        </h1>
        <h5 className="text-slate-700">Try To Understand People Expectation</h5>
        <div className="summary">
          <div className="country">
            <BsFillFlagFill />
            <h2>72</h2>
            <h5>Country</h5>
          </div>
          <div className="country">
            <FcBarChart />
            <h2>535+</h2>
            <h5>Different Items</h5>
          </div>
          <div className="country">
            <IoIosPeople />
            <h2>720+</h2>
            <h5>Happy Client</h5>
          </div>
          <div className="country">
            <ImCool2 />
            <h2>7200+</h2>
            <h5>Feedback</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Summary;
