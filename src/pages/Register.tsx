import { Formik } from "formik";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { SolidButton } from "../styles/Onboarding/onboard";
import { RegisterBody, RegisterButton, RegisterFormBody, RegisterFormHeader } from "../styles/Register/Register";
import { initialUser, regUser, SignUpValidations } from "../utils/helpers";

export default function Register() {
  let navigate = useNavigate();
  return (
    <Formik
      initialValues={initialUser}
      onSubmit={(registervalues) => {
        regUser(registervalues);
      }}
      validationSchema={SignUpValidations}
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
                    value={values.first_name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                  />
                </div>
                <div className="block">
                  <label> Last name:</label>
                  <input
                    autoComplete="last name"
                    value={values.last_name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
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
                    value={values.phone_number}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Phone Number"
                    name="phone_number"
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
                disabled={errors.email || errors.first_name || errors.password ? true : false}
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
