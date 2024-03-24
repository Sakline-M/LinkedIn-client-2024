import React from "react";

const Colleagues = () => {
  return (
    <div className="colleagues mt-[50px]">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-[60px] font-light">
              Join your colleagues, classmates, and friends on LinkedIn.
            </h1>
            <a
              href="#"
              class="btn btn-primary btn-lg disabled"
              role="button"
              aria-disabled="true"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className="mb-[50px] mt-[-50px]">
        <img className="" src="/images/network.png" alt="" />
      </div>
    </div>
  );
};

export default Colleagues;
