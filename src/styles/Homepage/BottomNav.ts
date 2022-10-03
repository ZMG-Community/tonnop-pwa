import styled from "styled-components";

export const Nav = styled.div`
  height: 88px;
  width: 100%;
  padding: 16px 54px 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #0D387130;
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