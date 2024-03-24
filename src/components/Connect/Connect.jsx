import React from "react";

const Connect = () => {
  return (
    <div className="container my-[100px]">
      <div className="row">
        <div className="col-md-6">
          <div className="div">
            <img
              className="w-[60%] h-auto"
              src="/images/sofa-people.svg"
              alt=""
            />
          </div>
          <div className="div">
            <div className="w-[80%] mt-[20px]">
              <h1 className="text-[45px] font-normal">
                Connect with people who can help
              </h1>
            </div>
            <div className="mt-[20px]">
              <a className="border border-blue-800" href="#">
                Find people you know
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="div">
            <img
              className="w-[60%] h-auto"
              src="/images/cartoon-girl.svg"
              alt=""
            />
          </div>
          <div className="div">
            <div className="w-[80%] mt-[20px]">
              <h1 className="text-[45px] font-normal">
                Learn the skills you need to succeed
              </h1>
            </div>
            <div className="mt-[20px]">
              <a className="border border-blue-800" href="#">
                Find people you know
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
