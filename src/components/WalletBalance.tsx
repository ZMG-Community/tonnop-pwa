import { AiOutlinePlus } from "react-icons/ai";
import { Wallet } from "../styles/Homepage/Home";
export default function WalletBalance() {
  return (
    <Wallet>
      <div className="wallet_balance">
        <p>Wallet Balance</p>
        <h1>NGN500,420.00</h1>
      </div>
      <div className="plus">
        <AiOutlinePlus />
      </div>
    </Wallet>
  );
}
