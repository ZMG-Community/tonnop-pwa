import { NavLink } from "react-router-dom";
import { Nav } from "../styles/Homepage/BottomNav";
import HomeIcon from "./HomeIcon";
import ProfileIcon from "./ProfileIcon";
import WalletIcon from "./WalletIcon";

export default function BottomNav() {
  let activeStyle = {
    color: "var(--brand)",
    fill: "var(--brand)",
    fontWeight: "400",
    transition: "all 0.2 ease-in",
  };
  let dormantStyle = {
    color: "#1C1C2850",
    fontWeight: "700",
    fill: "#DCDCDC",
  };
  return (
    <Nav>
      <div className="icon">
        <NavLink to="/home" style={({ isActive }) => (isActive ? activeStyle : dormantStyle)}>
          <HomeIcon color="inherit" />
          <p>home</p>
        </NavLink>
      </div>
      <div className="icon">
        <NavLink to="/wallet" style={({ isActive }) => (isActive ? activeStyle : dormantStyle)}>
          <WalletIcon />
          <p>Wallet</p>
        </NavLink>
      </div>
      <div className="icon">
        <NavLink to="/profile" style={({ isActive }) => (isActive ? activeStyle : dormantStyle)}>
          <ProfileIcon />
          <p>Profile</p>
        </NavLink>
      </div>
    </Nav>
  );
}
