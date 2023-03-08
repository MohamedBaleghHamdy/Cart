import img1 from "../assets/images/hamburger.png";
import img2 from "../assets/images/bread.png";
import img3 from "../assets/images/pizza.png";
import Data from "../index.js";
import { useState } from "react";
const Popular = () => {
  const [data, setData] = useState(Data);
  const filterResult = (catItem) => {
    const resultData = Data.filter((item) => {
      return item.category === catItem;
    });
    setData(resultData);
  };
  return (
    <>
      <h2 className="text-center mt-5">Pooular Foods</h2>
      <div
        className="container d-flex justify-content-center gap-2"
        style={{ background: "rgb(223, 32, 32)" }}
      >
        <button className="buttonn" onClick={() => setData(Data)}>
          All
        </button>
        <button className="buttonn" onClick={() => filterResult("Burger")}>
          <img src={img1} style={{ width: "20%" }} alt="" /> Burger
        </button>
        <button className="buttonn" onClick={() => filterResult("Pizza")}>
          <img src={img3} style={{ width: "20%" }} alt="" /> Pizza
        </button>
        <button className="buttonn" onClick={() => filterResult("Bread")}>
          <img src={img2} style={{ width: "20%" }} alt="" /> Bread
        </button>
      </div>
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div
              key={item.id}
              className="col-lg-3 col-md-6 text-center mt-3 card1"
            >
              <img src={item.img} style={{ width: "44%", marginTop: 10 }} />
              <h6>{item.title}</h6>
              <div className="d-flex justify-content-between mt-5 mb-4">
                <h5 style={{ color: "red" }}>{item.price}</h5>
                <button className="button">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Popular;
