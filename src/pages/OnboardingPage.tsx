import { useNavigate } from "react-router-dom";
import splash1 from "../images/splash1.png";
import tonnop2 from "../images/tonnoplogo2.png";
import {
  OnboardBody,
  OnboardButtons,
  OnboardCarousel,
  OnboardCTA,
  OutlineButton,
  SolidButton,
  Splash,
} from "../styles/Onboarding/onboard";

export default function OnboardingPage() {
  let navigate = useNavigate();
  return (
    <OnboardBody>
      <Splash initial={{ x: 0 }} animate={{ x: "-100vw", transition: { duration: 2, ease: "easeIn", delay: 1.25 } }}>
        <img src={tonnop2} alt="tonnop logo" />
      </Splash>
      <OnboardCTA>
        <OnboardCarousel>
          <div className="onboarding_images">
            <img src={splash1} alt="wallet" />
          </div>
          <div className="onboarding_text">
            <h2>Go to your favorite spots and get rewarded for it </h2>
            <span>Your favorite nightlife wallet. You get to save and invest while having fun.</span>
          </div>
          <div className="onboarding_navs">
            <div className="nav active" />
            <div className="nav" />
            <div className="nav" />
          </div>
        </OnboardCarousel>
        <OnboardButtons>
          <SolidButton onClick={() => navigate("/login")}>Login</SolidButton>
          <div>
            <OutlineButton onClick={() => navigate("/register")}>Register</OutlineButton>
          </div>
        </OnboardButtons>
      </OnboardCTA>
    </OnboardBody>
  );
}
