import profile from "../images/profilepic.png";
import { UserHeader } from "../styles/Homepage/Home";
export default function UserAvatar() {
  return (
    <UserHeader>
      <div className="user_image">
        <img src={profile} alt="user_image" />
      </div>
      <div className="user_info">
        <h3>Hello Sarah!</h3>
        <span>Monday, 12th Feb, 2021</span>
      </div>
    </UserHeader>
  );
}
