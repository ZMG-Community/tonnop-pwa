import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
      }
      html{
        --brand: #004559;
        --subtitle: #0C0D0C;
        --border: #1C1C2880;
        --disabled: #00000040;
        --numpad: #2CCFC70D;
        --secondary: #FF9220;
        --text: #1A1A1A;
        --unactive: #EBEBF0;
        --active: #FF9220;
        --progress: #E4E3E3;
        --text-progress: #1C1C28;
      }
      #root{
        margin:0 auto;
        height: 100%;
      }
    body{
      margin: 0;
      height: 100%;
      width: 100%;
      /* scroll-behavior: smooth; */
      font-family: "Montserrat", sans-serif;
    }
    h2{
      font-weight: 700;
      font-size: 18px;
      line-height: 23.4px;
      margin-bottom: 14px;
      color: var(--text)
    }
    span{
      opacity: 0.7;
      font-weight: 400;
      font-size: 12px;
      line-height: 15.6px;
      /* color: #0C0D0C; */
      color: var(--subtitle)
    }
    ::-webkit-scrollbar {
      display: none;
    }
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
      padding:0 16px ;
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
`;
