import { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { FormSelect } from "../../styles/KYC/KYC";
import { RegisterBody, RegisterFormHeader } from "../../styles/Register/Register";

export default function KYC() {
  let navigate = useNavigate();
  const [value, setValue] = useState("");
  // @ts-ignore
  const handleChange = (e) => {
    setValue(e.target.value);
    navigate(`/${e.target.value}`);
  };

  return (
    <RegisterBody>
      <BiLeftArrowAlt fontSize="28px" color="var(--brand)" onClick={() => navigate(-1)} />
      <RegisterFormHeader>
        <div className="titles">
          <h2>Let’s confirm who you are</h2>
          <span>Select means of verification</span>
        </div>
        <div className="progress">3/4</div>
      </RegisterFormHeader>
      <FormSelect>
        <div className="block">
          <label> Select means of Identification </label>
          <select defaultValue={value} onChange={handleChange} placeholder="NIN">
            <option value={"nin"}> NIN</option>
            <option value={"nin"}> NIN</option>
            <option value={"bvn"}> BVN</option>
            <option value={"passport"}> Passport Number</option>
          </select>
        </div>
      </FormSelect>
    </RegisterBody>
  );
}
