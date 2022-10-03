import styled from "styled-components";

export const FormSelect = styled.div`
  margin-top: 38px;
  text-align: right;
  .block{
    margin-top: 16px;
    text-align: left;
    label{
      font-size: 14px;
      line-height: 18.2px;
      font-weight: 700;
      color: var(--brand);
    }
    select{
      width: 100%;
      outline: 0;
      border:.25px solid var(--border);
      border-radius: 8px;
      padding:0 16px;
      margin-top: 8px;
      height: 56px;
      background-color: transparent;
      color: var(--text);
      ::placeholder{
        color: rgba(28, 28, 40, 0.5);
        opacity: 0.5;
        font-size: 12px;
        font-weight: 400;
        line-height: 16.68px;
      }
    }
    option {
      outline: none;
      border: none;
    }
  }
  span{
    font-size: 12px;
    font-weight: 500;
    color: var(--secondary);
  }
  a{
    text-decoration: none;
    font-size: 12px;
    font-weight: 500;
    margin-top: 16px;
    display: inline-block;
    color: var(--secondary);
  }
`

export const ButtonGroup = styled.div`
  text-align: center;
  position: absolute;
  bottom: 92px;
  width: 100%;
  left: 0;
  padding: 0 24px;
  p{
    margin-bottom: 16px;
    font-size: 12px;
    font-weight: 400;
    color: var(--text);
    a{
      font-weight: 700;
      color: var(--secondary);
      text-decoration: none;
    }
  }
  div{
    height: 24px;
    margin-top: 24px;
  }
`
export const PageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3{
    font-size: 14px;
    font-weight: 700;
  }
`