import "./login.scss";

const Login = () => {
  return (
    <>
      <div className="welcome-section">
        <h1>
          Welcome to your <br /> professional community
        </h1>
      </div>

      <div className="login-section mt-[40px]">
        <form>
          <div className="form-row">
            <div className="form-group col-md-8">
              <label>Email or Phone number</label>
              <input
                type="email"
                className="form-control mt-[8px] h-[55px] border-black"
              />
            </div>
            <div className="form-group mt-[17px] col-md-8 ">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-[8px] h-[55px] border-black"
              />
            </div>
          </div>

          <div className="mt-[15px]">
            <a href="#">Forget Password?</a>
          </div>

          <div className="col-md-8">
            <button
              type="submit"
              className="btn btn-primary h-[45px] mt-[15px] w-full"
            >
              Sign in
            </button>
            <div>
              <div className="col mt-[45px]">
                <p className="mb-[20px] text-[12px] ">
                  By clicking Continue, you agree to LinkedIn’s <span>User Agreement,
                  Privacy Policy, </span> and <span>Cookie Policy</span>.
                </p>
              </div>

              <div className="flex gap-3 items-center justify-center border border-black h-[50px]">
                <div>
                  <img
                    className="w-[45px] h-auto"
                    src="/images/logo.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <span> Continue with Google</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="term-section">
        <div className="col-md-8">
          <button
            type="submit"
            className="btn h-[45px] mt-[15px] mb-[15px] outline outline-1 w-full"
          >
            New to Linkedin? Join now
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
