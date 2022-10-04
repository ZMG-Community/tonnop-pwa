import styled from "styled-components";
import cafe from "../../images/cafe.png";
import walletBg from "../../images/walletBg.png";

export const Body = styled.div`
  padding: 24px;
  section{
    margin-top: 24px;
    span{
      font-size: 12px;
      font-weight: 400;
      padding-top: 8px;
      text-transform: capitalize;
      color: var(--brand);
    }
    .list{
      display: flex;
      align-items: center;
      gap: 16px;
      overflow-x: scroll;
    }
  }
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
  height: 120px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0 24px;
  color: white;
  margin: 24px 0 0;
  background-image: url(${walletBg});
  background-color: #07495D;
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

export const Update = styled.div`
  flex-shrink: 0;
  padding: 16px;
  width: 226px;
  height: 126px;
  border-radius: 16px;
  box-shadow: 0px 2px 6px 8px rgba(13, 56, 113, 0.02);
  margin-top: 10px;
  .case{
    line-height: 14px;
    p{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 10px;
      margin-bottom: 6px;
    }
    span{
      font-weight: 700;
      font-size: 10px;
      text-align: center;
      color: rgba(28, 28, 40, 0.5);
    }
  }
  .direction{
    display: flex;
    justify-content:space-between;
    align-items: center;
    margin-top: 18px;
  }
`
export const DirectionButton = styled.button`
  outline: none;
  background-color: var(--secondary);
  color: #26252A;
  line-height:20px;
  height: 24px;
  border-radius: 8px;
  width: 98px;
  font-weight: 400;
  font-size: 8px;
  text-align: center;
  border: none;
  letter-spacing:0.1px;
  transition: all 0.2s ease-in
`
export const Cafe = styled.div`
  flex-shrink: 0;
  padding: 16px;
  width: 226px;
  height: 140px;
  border-radius: 16px;
  position: relative;
  margin: 0;
  margin-top: 10px;
  background: linear-gradient(0deg, #181818 0%, rgba(63, 55, 55, 0) 54.05%);
  background-color: #C4C4C4;
  background-position: center;
  background-image: url(${cafe});
  .cafe{
    &_rating{
      width: 100%;
      display: flex;
      align-items:center;
      justify-content: space-between;
      .heart{
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .rating{
        width: 40px;
        height: 16px;
        background: rgba(33, 31, 31, 0.79);
        border-radius: 4px;
        padding: 2px;
        display: flex;
        align-items: center;
        gap: 4px;
        font-weight: 700;
        font-size: 10px;
        line-height: 12px;
        color: white;
      }
    }
    &_info{
      position: absolute;
      bottom: 16px; 
      color: white;
      h5{
        font-size: 12px;
        font-weight: 400;
        text-transform: capitalize;
      }
      span{
        font-size: 10px;
        font-weight: 700;
        line-height: 12.85px;
        color: white;
        padding: 0;
      }
    }
  }
`