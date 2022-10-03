import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { ButtonGroup, FormSelect, PageTitle } from "../styles/KYC/KYC";
import { SolidButton } from "../styles/Onboarding/onboard";
import { RegisterBody, RegisterFormHeader } from "../styles/Register/Register";

export default function Reset() {
  let navigate = useNavigate();
  return (
    <>
      <RegisterBody>
        <PageTitle>
          <BiLeftArrowAlt fontSize="28px" color="var(--brand)" onClick={() => navigate(-1)} />
        </PageTitle>
        <RegisterFormHeader>
          <div className="titles">
            <h2>Reset Password</h2>
            <span>Please provide your Tonnop registered email address</span>
          </div>
        </RegisterFormHeader>
        <FormSelect>
          <div className="block">
            <label> Email: </label>
            <input type="text" placeholder="Please enter your email" />
          </div>
        </FormSelect>
        <ButtonGroup>
          <SolidButton
            onClick={() => {
              navigate("/password");
            }}
          >
            Reset
          </SolidButton>
        </ButtonGroup>
      </RegisterBody>
      {/* Reset password */}
      <RegisterBody>
        <PageTitle>
          <BiLeftArrowAlt fontSize="28px" color="var(--brand)" onClick={() => navigate(-1)} />
        </PageTitle>
        <RegisterFormHeader>
          <div className="titles">
            <h2>Reset Password</h2>
            <span>Sign into your app with your Passcode. Please don’t share this passcode with anyone.</span>
          </div>
        </RegisterFormHeader>
        <FormSelect>
          <div className="block">
            <label> New Password: </label>
            <input type="password" placeholder="Please enter your email" />
          </div>
          <div className="block">
            <label> Confirm Password: </label>
            <input type="password" placeholder="Please enter your email" />
          </div>
        </FormSelect>
        <ButtonGroup>
          <SolidButton
            onClick={() => {
              navigate("/password");
            }}
          >
            Confirm
          </SolidButton>
        </ButtonGroup>
      </RegisterBody>
    </>
  );
}
