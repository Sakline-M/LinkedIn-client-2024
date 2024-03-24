import "./header.scss";

const Header = () => {
  return (
    <div className="container mt-[15px]">
      <div className="row">
        <div className="col-md-6">
          <img className="w-[100px]" src="/images/link-logo.png" alt="" />
        </div>
        <div className="col-md-6 flex justify-end gap-3 mt-[10px]">
          <div className="logos flex justify-center gap-3 ">
            <div className="btn">
              <div className="article flex flex-col items-center">
                <img src="/images/article.svg" alt="" />
                <span>Articles</span>
              </div>
            </div>

            <div className="btn">
              <div className="article flex flex-col items-center">
                <img src="/images/people.svg" alt="" />
                <span>People</span>
              </div>
            </div>

            <div className="btn">
              <div className="article flex flex-col items-center">
                <img src="/images/learning.svg" alt="" />
                <span>Learning</span>
              </div>
            </div>

            <div className="btn">
              <div className="jobs flex flex-col items-center">
                <img src="/images/jobs.svg" alt="" />
                <span>Jobs</span>
              </div>
            </div>
          </div>
          <div className="signin flex items-center gap-2">
            <a className="text-slate-700" href="#">Join now</a>
            <a className="border-2 rounded" href="#"><span className="m-[12px]">Sign in</span></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
