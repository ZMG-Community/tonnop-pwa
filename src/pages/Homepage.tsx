import BottomNav from "../components/BottomNav";
import UserAvatar from "../components/UserAvatar";
import WalletBalance from "../components/WalletBalance";
import { Body } from "../styles/Homepage/Home";

export default function Homepage() {
  return (
    <Body>
      <UserAvatar />
      <WalletBalance />
      <BottomNav />
    </Body>
  );
}
