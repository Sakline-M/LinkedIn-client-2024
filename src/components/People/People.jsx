import React from "react";

const People = () => {
  return (
    <div className="container">
      <div className="row flex items-center">
        <div className="col-md-6">
          <div>
            <div>
              <h1 className="text-red-500 font-normal">Let the right people know you’re open to work</h1>
            </div>
            <div>
              <h4  className="mt-[40px]  font-thin">
                With the Open To Work feature, you can privately tell recruiters
                or publicly share with the LinkedIn community that you are
                looking for new job opportunities
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img className="w-[80%]" src="./images/mobile.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default People;
