import styled from "styled-components";

export const Body = styled.div`
  padding: 24px;

`

export const UserHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
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