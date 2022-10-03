import BottomNav from "../components/BottomNav";
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
      <BottomNav />
    </Body>
  );
}
