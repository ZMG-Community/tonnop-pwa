import styled from "styled-components";

export const Nav = styled.div`
  height: 88px;
  width: 100%;
  padding: 16px 54px 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid #0D387130;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  .icon{
    text-align: center;
    a{
      text-decoration: none;
    }
    p{
      margin: 0;
      margin-top: 6px;
      font-size: 8px;
      text-transform: capitalize;
    }
  }
`
export const QRButton = styled.div`
  outline: none;
  background-color: var(--brand);
  color: white;
  height: 54px;
  border-radius: 50px;
  width: 137px;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  border: none;
  transition: all 0.2s ease-in;
  position: absolute;
  bottom: 112px;
  right: 24px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    margin-left: 10px;
  }
`