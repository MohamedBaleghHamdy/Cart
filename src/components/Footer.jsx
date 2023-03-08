import img from "../assets/images/res-logo.png";
import { BsFillSendFill } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="cardd Media">
        <div className="container ">
          <div className="row">
            <div className="col-lg-3 col-md-6 mt-5 mb-5">
              <img src={img} style={{ height: 60 }} alt="" />
              <h4>Tasty Treat</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                deleniti?
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mb-5">
              <h4>Delivery Time</h4>
              <h6>Sunday Thursday</h6>
              <h6>10:00 pm -11:00 pm</h6>
              <h6 className="mt-4">Friday saturday off day </h6>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mb-5">
              <h4>Contact</h4>
              <h6>Location:Egypt-Mansourah</h6>
              <h6>Phone:01068662949</h6>
              <h6>Email:Moahmed@gamil.com</h6>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mb-5">
              <h4>NewsLatter</h4>
              <p>Subscribe our NewsLatter</p>
              <div>
                <input
                  type="email"
                  placeholder="Enter Your Email" 
                  style={{
                    background: "transparent",
                    border: "1px solid #888",
                    padding: 4,
                                  }}
                                 
                              />
                             <BsFillSendFill />
                              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
