import { AiFillCar, AiFillCheckCircle } from "react-icons/ai";
import img from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="container ">
      <div className="row">
        <div className="col-md-6  ff">
          <div className="mt-5 ">
            <h5>Easy Way To Make An Order</h5>
            <h1 style={{ marginBottom: 20 }}>
              <span >HUNGRY?</span> just wait <br />{" "}
              food at
              <span > your Door </span>
            </h1>
            <p >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              veritatis, <br /> a blanditiis id amet culpa iste ea atque vero
              facilis!
            </p>
            <div className=" d-con gap-3 d-flex">
              <button className="button">Order Now</button>
              <button className="button">See All Foods </button>
            </div>
            <div className="d-con d-flex gap-2 mt-3">
              <span className="me-4 ">
                <AiFillCar
                  style={{
                    background: "red",
                    borderRadius: "50%",
                    color: "#fff",
                    fontSize: 25,
                  }}
                />
                No Shipping fees
              </span>
              <span>
                <AiFillCheckCircle
                  style={{
                    background: "red",
                    borderRadius: "50%",
                    color: "#fff",
                    fontSize: 25,
                  }}
                />{" "}
                100% secure checkout
              </span>
            </div>
          </div>
        </div>
        <div className="d-con col-md-6  ">
          <img src={img} alt="Hero" style={{ width: "75%" }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
