import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./feed.scss";
import Post from "../../components/Post/Post";
import UserPost from "../../components/UserPost/UserPost";

const Feed = () => {
  return (
    <>
      <Header />
      <div className="container my-[20px]">
        <div className="row">
          <div className="col-md-3 w-[225px] ">
            <div className="section-1 mx-[17px] flex flex-col items-center border  shadow-md">
              <div className="flex flex-col items-center">
                <img
                  className="w-[225px] h-[57px] mb-[-25px] rounded object-cover"
                  src="/images/linkedin cover.png"
                  alt=""
                />
                <img
                  className="w-[70px] h-[70px]  object-cover border-2 rounded-[50%]"
                  src="/images/dp.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center mt-[12px]">
                <h4 className="text-[17px]">Sakline Mostak</h4>
                <p className="text-[12px]">Web Developer 365 Company</p>
              </div>

              <div className="connection text-[12px] flex flex-col my-[10px]">
                <a href="/">connections</a>
                <a className="font-semibold" href="/">
                  Connections with alumini
                </a>
              </div>
            </div>
            <div className="section-2 mx-[17px] mt-[30px]  flex flex-col  border  shadow-md">
              <div className="flex flex-col gap-2 mt-2 items-start ml-[20px] ">
                <a className="text-blue-600" href="#">
                  Groups
                </a>
                <a className="text-blue-600" href="#">
                  Events
                </a>
                <a className="text-blue-600" href="#">
                  Followed Hashtags
                </a>
              </div>
              <hr />
              <div className="my-[5px] flex m-auto">
                <p>Discover more</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <Post/>
            <UserPost/>
          </div>

          <div className="col-md-3">
            <div className="section-1  flex flex-col border rounded shadow-lg">
              <h1 className="text-[20px] my-[10px] ml-[10px]">
                Add to your feed
              </h1>
              <div className="people ml-[10px] flex gap-2 my-[10px] content-center">
                <div className="photo w-full mr-[-60px]">
                  <img
                    className="w-[60px] h-[60px]  object-cover border-1 rounded-[50%]"
                    src="/images/dp.png"
                    alt=""
                  />
                </div>
                <div className="details ">
                  <h5 className="ml-[10px] text-[16px]">Sakline Mostak</h5>
                  <p className="text-[12px] ml-[10px]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Esse
                  </p>
                  <button className="border- m-[3px]">Follow</button>
                </div>
              </div>
              <div className="people ml-[10px] flex gap-2 my-[10px] content-center">
                <div className="photo w-full mr-[-60px]">
                  <img
                    className="w-[60px] h-[60px]  object-cover border-2 rounded-[50%]"
                    src="/images/dp.png"
                    alt=""
                  />
                </div>
                <div className="details ">
                  <h5 className="ml-[10px] text-[16px]">Sakline Mostak</h5>
                  <p className="text-[12px] ml-[10px]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Esse
                  </p>
                  <button className="border-2 m-[3px]">Follow</button>
                </div>
              </div>
              <div className="people ml-[10px] flex gap-2 my-[10px] content-center">
                <div className="photo w-full mr-[-60px]">
                  <img
                    className="w-[60px] h-[60px]  object-cover border-2 rounded-[50%]"
                    src="/images/dp.png"
                    alt=""
                  />
                </div>
                <div className="details ">
                  <h5 className="ml-[10px] text-[16px]">Sakline Mostak</h5>
                  <p className="text-[12px] ml-[10px]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Esse
                  </p>
                  <button className="border-2 m-[3px]">Follow</button>
                </div>
              </div>
            </div>

            <Link to='/' >
            <div className="section-2 mt-[20px] border shadow-lg ">
              <p className="text-[12px] opacity-65 mt-[10px] mx-[5px]">Sakin,unlock your potential with with LinkedIn Premium</p>
              <div className="photos flex gap-4 justify-center my-[10px]">
              <img
                  className="w-[70px] h-[70px]  object-cover border-1 rounded-[50%]"
                  src="/images/dp.png"
                  alt=""
                />
                <img
                  className="w-[70px] h-[70px]  object-cover  rounded-sm"
                  src="/images/linkedin-icon-10.jpg"
                  alt=""
                />
              </div>
              <div className="details mb-[10px] ">
                <div className="text-[14px] mx-[10px]">
                  See who's viewed your profile in the last 90 days
                </div>
                <button className="w-full">
                  Try for free!
                </button>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
