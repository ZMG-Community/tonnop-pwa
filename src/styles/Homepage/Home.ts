import styled from "styled-components";
import walletBg from "../../images/walletBg.png";

export const Body = styled.div`
  padding: 24px;
  /* width: 100vw; */

`

export const UserHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  .user{
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
  .user_image{
    border-radius: 50%;
    height: 32px;
    width: 32px;
    img{
      width: 100%;
      border-radius: inherit;
    }
  }
  .user_info{
    h3{
      font-weight: 400;
      font-size: 16px;
      color: var(--text-progress);
      margin: 0;
      margin-bottom: 6px;
      margin-left: 4px;
    }
    span{
      font-size: 12px;
      font-weight: 700;
      color: #1C1C2850;
    }
  }
`
export const Wallet = styled.div`
  /* width: 100%; */
  height: 120px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0 24px;
  color: white;
  margin-top: 24px;
  background-image: url(${walletBg});
  /* background-color: #07495D; */
  background-repeat: no-repeat;
  background-position: center;
  .wallet_balance{
    p{
      font-size: 12px;
      font-weight: 700;
      line-height: 15.6px;
      margin-bottom: 4px;
    }
    h1{
      font-size: 24px;
      line-height: 29.26px;
      font-weight: 400;
    }
  }
  .plus{
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background-color: #2A6474;
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 32px;
    color: white;
  }
`