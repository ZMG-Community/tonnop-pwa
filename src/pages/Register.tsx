import { Formik } from "formik";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { SolidButton } from "../styles/Onboarding/onboard";
import { RegisterBody, RegisterButton, RegisterFormBody, RegisterFormHeader } from "../styles/Register/Register";
import { Signup } from "../utils/helpers";
import { tonnopUser } from "../utils/initials";
import { TonnopUserValidation } from "../utils/validations";

export default function Register() {
  let navigate = useNavigate();
  return (
    <Formik
      initialValues={tonnopUser}
      onSubmit={(registervalues) => {
        Signup(registervalues);
      }}
      validationSchema={TonnopUserValidation}
    >
      {({ values, handleSubmit, handleChange, handleBlur, errors, touched }) => {
        return (
          <RegisterBody>
            <BiLeftArrowAlt fontSize="28px" color="var(--brand)" onClick={() => navigate(-1)} />
            <RegisterFormHeader>
              <div className="titles">
                <h2>Create An Account</h2>
                <span>Create an account to get started. Join the movement.</span>
              </div>
              <div className="progress">1/4</div>
            </RegisterFormHeader>
            <RegisterFormBody>
              <form>
                <div className="block">
                  <label> First name:</label>
                  <input
                    autoComplete="first name"
                    value={values.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                  />
                </div>
                <div className="block">
                  <label> Last name:</label>
                  <input
                    autoComplete="last name"
                    value={values.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                  />
                </div>
                <div className="block">
                  <label> Email:</label>
                  <input
                    autoComplete="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    placeholder="Your Email"
                    name="email"
                  />
                </div>
                <div className="block">
                  <label> Phone Number:</label>
                  <input
                    autoComplete="phone_number"
                    value={values.phoneNumber}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Phone Number"
                    name="phoneNumber"
                  />
                </div>
                <div className="block">
                  <label> Password:</label>
                  <input
                    autoComplete="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </div>
              </form>
            </RegisterFormBody>
            <RegisterButton>
              <SolidButton
                disabled={errors.email && errors.firstName && errors.password ? true : false}
                onClick={() => {
                  handleSubmit();
                  navigate("/verify");
                }}
                type="submit"
              >
                Next
              </SolidButton>
            </RegisterButton>
          </RegisterBody>
        );
      }}
    </Formik>
  );
}
