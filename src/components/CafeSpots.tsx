import { IoMdStar } from "react-icons/io";
import { IoHeartSharp } from "react-icons/io5";
import { Cafe } from "../styles/Homepage/Home";

export default function CafeSpots() {
  return (
    <Cafe>
      <div className="cafe_rating">
        <div className="heart">
          <IoHeartSharp color="red" size="12px" />
        </div>
        <div className="rating">
          <IoMdStar color="#FFBD00" size="12px" />
          <p>4.1</p>
        </div>
      </div>
      <div className="cafe_info">
        <h5>Spice Cafe</h5>
        <span>10 Kilometers away</span>
      </div>
    </Cafe>
  );
}
