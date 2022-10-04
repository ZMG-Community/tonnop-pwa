import BottomNav from "../components/BottomNav";
import CafeSpots from "../components/CafeSpots";
import Updates from "../components/Updates";
import UserAvatar from "../components/UserAvatar";
import WalletBalance from "../components/WalletBalance";
import { Body } from "../styles/Homepage/Home";

export default function Homepage() {
  return (
    <Body>
      <UserAvatar />
      <WalletBalance />
      <section>
        <span> updates </span>
        <div className="list">
          <Updates />
          <Updates />
          <Updates />
          <Updates />
          <Updates />
        </div>
      </section>
      <section>
        <span> spots near you </span>
        <div className="list">
          <CafeSpots />
          <CafeSpots />
          <CafeSpots />
          <CafeSpots />
          <CafeSpots />
          <CafeSpots />
        </div>
      </section>
      <section>
        <span> recent transactions </span>
        <div className="list">
          <Updates />
          <Updates />
          <Updates />
          <Updates />
          <Updates />
          <Updates />
        </div>
      </section>
      <BottomNav />
    </Body>
  );
}
