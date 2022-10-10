import styled from "styled-components";


export const DetailBody = styled.div`
  padding: 24px 24px 0 ;
`
export const DetailsHeader = styled.div`
  margin:40px 0 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  h2{
    color: var(--brand);
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 700;
  }
  span{
    font-size: 10px;
    color: black;
    font-weight: 400;
  }
  .progress{
    width: 24px;
    height: 24px;
    font-weight: 700;
    font-size:24px;
    color: red;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
`
export const CafeImages = styled.div`
  margin: 16px 0 24px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  overflow-x:scroll ;
`

export const OverviewContainer = styled.div`
  h2{
    color: var(--brand);
    margin-bottom: 2px;
    font-size: 12px;
    font-weight: 700;
  }
  span{
    font-size: 10px;
    color: #3C3939;
    font-weight: 400;
    line-height: 15.6px;
  }
  .map_container {
    margin-top: 16px;
  }
`
export const ReviewContainer = styled.div`
  margin-top: 24px;
  .title{
    display: flex;
    align-items:center;
    justify-content: space-between;
    h2{
      color: var(--brand);
      margin-bottom: 2px;
      font-size: 12px;
      font-weight: 700;
    }
    span{
      font-size: 10px;
      font-weight: 400;
      line-height: 14px;
      color: #3C3939;
    }
  }
  span{
    font-size: 10px;
    font-weight: 400;
    line-height: 15.6px;
  }
  .map_container {
    margin-top: 16px;
  }
`