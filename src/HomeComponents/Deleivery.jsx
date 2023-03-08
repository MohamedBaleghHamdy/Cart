import img1 from "../assets/images/service-01.png";
import img2 from "../assets/images/service-02.png";
import img3 from "../assets/images/service-03.png";

const Deleivery = () => {
  return (
    <>
      <div className="text-center mt-5  ">
        <h5 style={{ color: "red" }}>What We Serve</h5>
        <h2>
          Just sit back at home <br /> we will <span>take care</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit <br />. Fugit
          mollitia deleniti consequatur dignissimos in ab architecto.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 text-center">
            <img src={img1} alt="img1" style={{ width: "25%" }} />
            <h4>Quick Delivery</h4>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Nostrum, harum.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <img src={img2} alt="img1" style={{ width: "25%" }} />
            <h4>Super dine in</h4>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Nostrum, harum.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <img src={img3} alt="img1" style={{ width: "25%" }} />
            <h4>Easy pick up</h4>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Nostrum, harum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deleivery;
