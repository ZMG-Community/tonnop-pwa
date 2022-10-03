import BottomNav from "../components/BottomNav";
import UserAvatar from "../components/UserAvatar";
import { Body } from "../styles/Homepage/Home";

export default function Homepage() {
  return (
    <Body>
      <UserAvatar />
      <BottomNav />
    </Body>
  );
}
