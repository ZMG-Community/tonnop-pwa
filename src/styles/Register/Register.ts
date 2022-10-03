import styled from "styled-components";

export const RegisterBody = styled.div`
  padding:12px 24px 0;
  color: var(--brand);
`

export const RegisterFormHeader = styled.div`
  margin:24px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  span{
    padding-top: 8px;
    strong{
      font-weight: bold;
      color: var(--subtitle);
    }
  }
  h2{
    color: var(--brand);
  }
  .progress{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border:3px solid var(--progress);
    font-weight: 700;
    font-size:10px;
    color: var(--text-progress);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
`
export const RegisterFormBody = styled.div`
  width: 100%;
  .block{
    margin-top: 16px;
    label{
      font-size: 14px;
      line-height: 18.2px;
      font-weight: 700;
      color: var(--brand);
    }
    input{
      width: 100%;
      outline: 0;
      border:.25px solid var(--border);
      border-radius: 8px;
      padding-left: 16px;
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
  }
`
export const RegisterButton = styled.div`
  margin-top: 62px;
`