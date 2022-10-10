import { AiOutlineScan } from "react-icons/ai";
import BottomNav from "../components/BottomNav";
import CafeSpots from "../components/CafeSpots";
import Updates from "../components/Updates";
import UserAvatar from "../components/UserAvatar";
import WalletBalance from "../components/WalletBalance";
import { QRButton } from "../styles/Homepage/BottomNav";
import { Body, Container } from "../styles/Homepage/Home";

export default function Homepage() {
  return (
    <Body>
      <Container>
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
      </Container>
      <QRButton>
        <AiOutlineScan fontSize="22px" />
        <p> Scan QR</p>
      </QRButton>
      <BottomNav />
    </Body>
  );
}
