import Vegetirian from "../assets/images/Vegetirian.jpg";
import double from "../assets/images/double.jpg";
import maxican from "../assets/images/maxican.jpg";
import seefood from "../assets/images/seefood.jpg";

const Hot = () => {
  return (
    <div>
      <h2 className="text-center">Hot Pizza</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center mt-3  card1">
            <img
              src={Vegetirian}
              alt="img4"
              style={{ width: "33%", marginTop: 10 }}
            />
            <h6>Vegetrian Pizza</h6>
            <div className="d-flex justify-content-between mt-5 mb-3">
              <h5 style={{ color: "red" }}>33$</h5>
              <button className="button">Add to cart</button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mt-3 card1">
            <img
              src={double}
              alt="img4"
              style={{ width: "33%", marginTop: 10 }}
            />
            <h6>Double Chease margherita</h6>
            <div className="d-flex justify-content-between mb-3 mt-5">
              <h5 style={{ color: "red" }}>33$</h5>
              <button className="button">Add to cart</button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mt-3 card1">
            <img
              src={maxican}
              alt="img4"
              style={{ width: "33%", marginTop: 10 }}
            />
            <h6>Mixican Green Wave</h6>
            <div className="d-flex justify-content-between mb-3 mt-5">
              <h5 style={{ color: "red" }}>33$</h5>
              <button className="button">Add to cart</button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mt-3 card1">
            <img
              src={seefood}
              alt="img4"
              style={{ width: "33%", marginTop: 10 }}
            />
            <h6>Seefood Pizza</h6>
            <div className="d-flex justify-content-between mb-3 mt-5">
              <h5 style={{ color: "red" }}>33$</h5>
              <button className="button">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hot;
