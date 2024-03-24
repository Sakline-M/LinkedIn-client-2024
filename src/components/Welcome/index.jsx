import React from "react";
import Login from "../Login/Login";

const index = () => {
  return (
    <div className="container mt-[50px]">
      <div className="row">
        <div className="col-md-6">
          <Login />
        </div>
        <div className="col">
          <img
            className="w-[750px] h-[650px]"
            src="/images/hero-img.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default index;
