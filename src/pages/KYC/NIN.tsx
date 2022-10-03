import { BiLeftArrowAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ButtonGroup, FormSelect, PageTitle } from "../../styles/KYC/KYC";
import { SolidButton } from "../../styles/Onboarding/onboard";
import { RegisterBody, RegisterFormHeader } from "../../styles/Register/Register";

export default function NIN() {
  let navigate = useNavigate();
  return (
    <RegisterBody>
      <PageTitle>
        <BiLeftArrowAlt fontSize="28px" color="var(--brand)" onClick={() => navigate(-1)} />
        <h3> NIN </h3>
        <div />
      </PageTitle>
      <RegisterFormHeader>
        <div className="titles">
          <h2>What’s Your NIN?</h2>
          <span>We need your National Identification Number (NIN) to confirm who you are.</span>
        </div>
      </RegisterFormHeader>
      <FormSelect>
        <div className="block">
          <label> NIN: </label>
          <input type="number" placeholder="1234567890" />
        </div>
      </FormSelect>
      <ButtonGroup>
        <p>
          {" "}
          <Link to="/">Click here</Link> if you can’t remember your NIN.
        </p>
        <SolidButton
          onClick={() => {
            navigate("/password");
          }}
        >
          Next
        </SolidButton>
      </ButtonGroup>
    </RegisterBody>
  );
}
