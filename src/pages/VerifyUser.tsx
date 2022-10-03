import { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { SolidButton } from "../styles/Onboarding/onboard";
import { RegisterBody, RegisterFormHeader } from "../styles/Register/Register";
import { InputDisplay, Numpad, OTPButtons } from "../styles/VerifyUser/Verify";

export default function VerifyUser() {
  const [activefield, setActiveField] = useState([
    {
      id: "0",
      state: false,
      value: "",
    },
    {
      id: "1",
      state: false,
      value: "",
    },
    {
      id: "2",
      state: false,
      value: "",
    },
    {
      id: "3",
      state: false,
      value: "",
    },
    {
      id: "4",
      state: false,
      value: "",
    },
  ]);
  let navigate = useNavigate();

  // @ts-ignore
  function handleChange(e) {
    setActiveField((current) =>
      current.map((obj) => {
        if (obj.id === e.target.name && e.target.value.length <= 1) {
          return { ...obj, value: e.target.value, state: true };
        }
        return obj;
      })
    );
    console.log("this is the target name:", typeof e.target.name);
    console.log("this is the target value:", e.target.value);
    console.log("this is the target name length:", e.target.name.length);
    console.log(activefield);
  }
  return (
    <RegisterBody>
      <BiLeftArrowAlt fontSize="28px" color="var(--brand)" onClick={() => navigate(-1)} />
      <RegisterFormHeader>
        <div className="titles">
          <h2>Enter OTP</h2>
          <span>
            Verify your account by entering the 4 digit code we sent to your phone number <strong>07065699050</strong>
          </span>
        </div>
        <div className="progress">2/4</div>
      </RegisterFormHeader>
      <InputDisplay>
        {activefield.map((data, id) => (
          <input type="number" key={id} placeholder="" name={data.id} value={data.value} onChange={handleChange} />
        ))}
      </InputDisplay>
      <OTPButtons>
        <p>Resend OTP</p>
        <SolidButton
          onClick={() => {
            navigate("/kyc");
          }}
        >
          Confirm
        </SolidButton>
      </OTPButtons>
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
          <BiLeftArrowAlt fontSize="24px" color="var(--secondary)" />
        </div>
      </Numpad>
    </RegisterBody>
  );
}
