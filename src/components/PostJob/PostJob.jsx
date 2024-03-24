import React from "react";
import Modal from "../Modal/Modal";

const PostJob = () => {
  return (
    <div className="postjob bg-yellow-100 h-[200px] flex items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Post your job for millions of people to see</h1>
          </div>
          <div className="col-md-6">
            <a href="#">Post a job</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
