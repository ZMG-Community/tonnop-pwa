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
        <Updates />
      </section>
      <section>
        <span> spots near you </span>
        <CafeSpots />
      </section>
      <BottomNav />
    </Body>
  );
}
