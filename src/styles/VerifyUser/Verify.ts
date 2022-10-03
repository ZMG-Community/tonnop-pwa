import styled from "styled-components";

export const InputDisplay = styled.div`
  margin:64px 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: auto;
  input{
    width: 56px;
    height: 56px;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--numpad);
    outline: none;
    border: none;
    color: var(--brand);
    :focus {
      border: 1px solid var(--brand);
    }
  }
`
export const OTPButtons = styled.div`
  width: 100%;
  text-align: center;
  p{
    font-weight: 700;
    font-size: 12px;
    margin-bottom: 24px;
    color: var(--secondary);
  }
  div{
    margin-top: 60px;
  }
`

export const Numpad = styled.div`
  display: grid;
  padding: 12px;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 32px;
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 700;
    min-height: 56px;
    h2{
      margin: 0;
      color: var(--brand)
    }
    span{
      color: var(--secondary);
      font-size: 12px;
      font-weight: 700;
    }
  }
`