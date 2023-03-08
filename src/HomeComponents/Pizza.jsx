

import img1 from "../assets/images/category-01.png";
import img2 from "../assets/images/category-02.png";
import img3 from "../assets/images/category-03.png";
import img4 from "../assets/images/category-04.png";
const Pizza = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-sm-2 mt-3 mt-sm-2  ">
          <div className=" dd d-flex align-items-center  gap-3 p-2 cardd ">
            <div>
              <img className="ms-3" src={img1} alt="" />
            </div>
            <div>Fast Food</div>
          </div>
        </div>
        <div className=" col-lg-3 col-md-6 mb-sm-2 mt-3 mt-sm-2  ">
          <div className=" dd d-flex align-items-center  gap-3 p-2 cardd ">
            <div>
              <img className="ms-3" src={img2} alt="" />
            </div>
            <div>Pizza</div>
          </div>
        </div>
        <div className=" col-lg-3 col-md-6 mb-sm-2 mt-3 mt-sm-2  ">
          <div className="dd d-flex align-items-center  gap-3 p-2 cardd ">
            <div>
              <img className="ms-3" src={img3} alt="" />
            </div>
            <div>Asian Food</div>
          </div>
        </div>
        <div className=" col-lg-3 col-md-6 mb-sm-2 mt-3 mt-sm-2  ">
          <div className="dd d-flex align-items-center  gap-3 p-2 cardd ">
            <div>
              <img className="ms-3" src={img4} alt="" />
            </div>
            <div>Row Meet</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
