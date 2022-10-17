import styled from "styled-components";
import map from "../../images/map.png";


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
    width: 100%;
    height: 124px;
    border-radius: 8px;
    padding: 24px;
    background-image: url(${map});
    position: relative;
    .cta{
      position: absolute;
      bottom: 24px;
      h3{
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        margin-bottom: 8px;
      }
      button{
        outline: none;
        border: none;
        width: 97px;
        height: 24px;
        border-radius: 8px;
        color: black;
        text-align: center;
        font-weight: 600;
        font-size: 8px;
        line-height: 10px;
        background: #FF9220;
        margin: none;
      }
    }
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
    &_comment{
      margin-top: 16px;
    }
    .review_header{
        width: 100%;
        display: flex;
        align-items: flex-start;
        margin: 16px 0 ;
        justify-content: space-between;
        .reviewer_info{
        display: flex;
        flex-shrink: 0;
        gap: 20px;
        align-items: flex-start;
        .image{
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: var(--brand);
          img{
            border-radius: 50%;
            width: 100%;
            height: 100%;
          }
        }
        .profile{
          h2{
            color: var(--brand);
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 6px;
            line-height:18.2px;
          }
        }
      }
        .time{
          /* width: 100%; */
          span{
            font-weight: 400;
            font-size:12px;
            color: var(--text-light);
          }
        }
  }
`