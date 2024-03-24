import React from "react";

const Anyone = () => {
  return (
    <div className="container w-[840px]">
      <div className="row flex items-center">
        <div className="col-md-6">
          <div className="details">
            <h1>Who is LinkedIn for?</h1>
            <h2>Anyone looking to navigate their professional life.</h2>
          </div>
          <div className="mt-[20px]">
            <ul className="flex flex-col gap-3">
              <li>
                <button type="button" class="btn btn-outline-info w-[90%]">
                  Find a coworker or classmate
                </button>
              </li>
              <li>
                <button type="button" class="btn btn-outline-info w-[90%]">
                  Find a new job
                </button>
              </li>
              <li>
                <button type="button" class="btn btn-outline-info w-[90%]">
                  Find a course or training
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <img className="w-[100%] " src="/images/anyone.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Anyone;
