import "./Modal.scss";

const Modal = ({ title, article, subtitle, tags  }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="mt-[40px] w-[450px] ">
            <h1 className="font-light text-[50px]">{title}</h1>
            <p>{article}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <p>{subtitle}</p>
          </div>
          <div>
            <ul>
              {tags.map((tag)=>(
                <li>
                <a href="#">{tag.tags}</a>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
