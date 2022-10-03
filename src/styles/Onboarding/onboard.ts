import { motion } from "framer-motion";
import styled from "styled-components";

export const Splash = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  background-color: var(--brand);
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
`;
export const OnboardBody = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`
export const OnboardCTA = styled.div`
  padding:0 24px;
  padding-top: 136px;
  `
export const OnboardCarousel = styled.div`
.onboarding{
  &_images{
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 286px;
    }
  }
  &_text{
    margin-top: 18px;
    text-align: center;
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
  }
  &_navs{
    margin-top: 30px;
    display: flex;
    width: 100%;
    align-items: center;
    gap: 8px;
    justify-content: center;
    .nav{
      height: 4px;
      width: 17px;
      border-radius: 10px;
      background-color: var(--unactive)
    }
    .active{
      background-color: var(--active)
    }
  }
}
`

export const OnboardButtons = styled.div`
  margin-top: 84px;
  div{
    margin-top: 16px;
  }

`

export const SolidButton = styled.button`
  outline: none;
  background-color: var(--brand);
  color: white;
  height: 56px;
  border-radius: 8px;
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  border: none;
  :disabled{
    background-color: var(--disabled);
  }
  transition: all 0.2s ease-in
`
export const OutlineButton = styled.button`
  outline: none;
  background-color: transparent;
  color: var(--brand);
  height: 56px;
  border-radius: 8px;
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  border: none;
  border-color: var(--brand);
  border: 1px solid;
`