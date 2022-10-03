import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { SolidButton, Splash } from "../../styles/Onboarding/onboard";
import { RegisterBody, RegisterFormHeader } from "../../styles/Register/Register";
import { InputDisplay, Numpad, OTPButtons } from "../../styles/VerifyUser/Verify";
export default function PasswordSetup() {
  let navigate = useNavigate();
  return (
    <>
      <RegisterBody>
        <BiLeftArrowAlt fontSize="28px" color="var(--brand)" onClick={() => navigate(-1)} />
        <RegisterFormHeader>
          <div className="titles">
            <h2>Set up transaction code</h2>
            <span>Sign into your app with your Passcode. Please don’t share this passcode with anyone. </span>
          </div>
          <div className="progress">4/4</div>
        </RegisterFormHeader>
        <InputDisplay>
          <input type="number" placeholder="" />
          <input type="number" placeholder="" />
          <input type="number" placeholder="" />
          <input type="number" placeholder="" />
          <input type="number" placeholder="" />
        </InputDisplay>
        <Numpad>
          <div>
            <h2>1</h2>
          </div>
          <div>
            <h2>2</h2>
          </div>
          <div>
            <h2>3</h2>
          </div>
          <div>
            <h2>4</h2>
          </div>
          <div>
            <h2>5</h2>
          </div>
          <div>
            <h2>6</h2>
          </div>
          <div>
            <h2>7</h2>
          </div>
          <div>
            <h2>8</h2>
          </div>
          <div>
            <h2>9</h2>
          </div>
          <div>
            <h2>*</h2>
          </div>
          <div>
            <h2>0</h2>
          </div>
          <div>
            <span>Delete</span>
          </div>
        </Numpad>
        <OTPButtons>
          <div />
          <SolidButton
            onClick={() => {
              navigate("/kyc");
            }}
          >
            Next
          </SolidButton>
        </OTPButtons>
      </RegisterBody>
      <Splash initial={{ x: 0 }} animate={{ x: "-100vw", transition: { duration: 2, ease: "easeIn", delay: 1.25 } }}>
        <div>
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.9">
              <path
                d="M72 36C72 45.5478 68.2072 54.7045 61.4558 61.4558C54.7045 68.2072 45.5478 72 36 72C26.4522 72 17.2955 68.2072 10.5442 61.4558C3.79285 54.7045 0 45.5478 0 36C0 26.4522 3.79285 17.2955 10.5442 10.5442C17.2955 3.79285 26.4522 0 36 0C45.5478 0 54.7045 3.79285 61.4558 10.5442C68.2072 17.2955 72 26.4522 72 36ZM54.135 22.365C53.8136 22.0447 53.4308 21.7925 53.0097 21.6235C52.5886 21.4545 52.1376 21.3721 51.684 21.3814C51.2303 21.3906 50.7831 21.4912 50.3692 21.6773C49.9553 21.8633 49.5831 22.1309 49.275 22.464L33.6465 42.3765L24.228 32.9535C23.5882 32.3573 22.742 32.0328 21.8676 32.0482C20.9933 32.0636 20.1591 32.4178 19.5407 33.0362C18.9223 33.6546 18.5681 34.4888 18.5527 35.3631C18.5373 36.2375 18.8618 37.0837 19.458 37.7235L31.365 49.635C31.6858 49.9552 32.0677 50.2075 32.4881 50.3768C32.9085 50.5462 33.3587 50.6292 33.8119 50.6208C34.265 50.6124 34.7118 50.5128 35.1256 50.328C35.5395 50.1431 35.9118 49.8769 36.2205 49.545L54.1845 27.09C54.7969 26.4532 55.1352 25.6017 55.1268 24.7183C55.1184 23.8349 54.7639 22.99 54.1395 22.365H54.135Z"
                fill="#004559"
              />
            </g>
          </svg>
          <h2>Account successfully created</h2>
          <span>Your account has been created. You can now fully access Tonnop.</span>
        </div>
      </Splash>
    </>
  );
}
