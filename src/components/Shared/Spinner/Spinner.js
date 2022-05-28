import React from "react";
import { TailSpin } from "react-loader-spinner";
import "./Spinner.css";

function Spinner() {
  return (
    <div className="spinner">
      <TailSpin color="#00BFFF" height={80} width={80} />
    </div>
  );
}

export default Spinner;
