import { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import faceId from "../images/faceId.svg";
import { ButtonGroup, FormSelect, PageTitle } from "../styles/KYC/KYC";
import { SolidButton } from "../styles/Onboarding/onboard";
import { RegisterBody, RegisterFormHeader } from "../styles/Register/Register";
import { TonnopLogin } from "../utils/helpers";

export default function Login() {
  let navigate = useNavigate();
  const [value, setValue] = useState<string>("");
  function handleChange(e: any) {
    // @ts-ignore
    setValue(e.target.value);
  }
  return (
    <RegisterBody>
      <PageTitle>
        <BiLeftArrowAlt fontSize="28px" color="var(--brand)" onClick={() => navigate(-1)} />
      </PageTitle>
      <RegisterFormHeader>
        <div className="titles">
          <h2>Welcome back Nana</h2>
          <span>Pick up right where you left off.</span>
        </div>
      </RegisterFormHeader>
      <FormSelect>
        <div className="block">
          <label> Password: </label>
          <input type="password" placeholder="Enter your password" value={value} onChange={handleChange} />
        </div>
        <Link to="/reset">Forgot Passcode?</Link>
      </FormSelect>
      <ButtonGroup>
        <p>
          {" "}
          Not Nana? <Link to="/">Switch account</Link>
        </p>
        <SolidButton
          onClick={() => {
            // to put data type as parameters
            // @ts-ignore
            TonnopLogin();
            navigate("/password");
          }}
        >
          Sign in
        </SolidButton>
        <div>
          <img src={faceId} alt={"face-id icon"} />
        </div>
      </ButtonGroup>
    </RegisterBody>
  );
}
