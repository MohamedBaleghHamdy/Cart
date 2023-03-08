import img from "../assets/images/location.png";
import { AiFillCheckCircle } from "react-icons/ai";
const Why = () => {
  return (
    <div className="container  mt-5 ">
      <div className="row">
        <div className="col-md-6  ">
          <img
            src={img}
            alt="img"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-6 ">
          <h2 className="mt-5 Media">
            Why <span>Tasty Treat?</span>
          </h2>
          <p >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
            architecto neque fugit natus iste vel optio culpa accusantium enim!
            Impedit accusamus quibusdam vero, deleniti repellat quisquam ea ex
            voluptate magni?
          </p>
          <div>
            <span>
              <AiFillCheckCircle />
            </span>{" "}
            Fresh and tasty foods
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              tenetur?
            </p>
          </div>
          <div>
            <span>
              <AiFillCheckCircle />
            </span>{" "}
            Quality support
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              tenetur?
            </p>
          </div>
          <div>
            <span>
              <AiFillCheckCircle />
            </span>{" "}
            Order from any location
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              tenetur?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
