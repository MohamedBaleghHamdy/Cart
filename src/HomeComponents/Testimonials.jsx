import pic from "../assets/images/ava-1.jpg";
import pic1 from "../assets/images/network.png";
const Testimonials = () => {
  return (
    <div className="container Media  mt-5 mb-5">
      <h5 className="mt-5 ">Testimonials</h5>
      <div className="row">
        <div className="col-md-6 mt-5">
          <h2 >
            What our <span>customer</span> are saying?
          </h2>
          <p className="mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
            doloribus magni dignissimos quo dicta esse dolorum aliquid soluta
            maxime, fuga in reiciendis eius placeat molestias vel exercitationem
            voluptas atque autem!
          </p>
          <div className="d-flex align-items-center ">
            <img
              src={pic}
              style={{ width: "13%", borderRadius: "50%", marginRight: 10 }}
              alt=""
            />
            <h6>Mohamed Balegh</h6>
          </div>
        </div>
        <div className="col-md-6 ">
          <img src={pic1} style={{ width: "70%" }} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
