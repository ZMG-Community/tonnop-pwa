import * as Yup from "yup";

export const SignUpValidations = Yup.object().shape({
  first_name: Yup.string().required("Required").min(4, "Atleast 4 characters"),
  last_name: Yup.string().required("Required").min(4, "Atleast 4 characters"),
  email: Yup.string().required("Required").min(4, "Atleast 4 characters"),
  phone_number: Yup.string().required("Required").min(10, "Atleast 10 characters"),
  password: Yup.string().min(8, "Atleast 8 characters")
});

export const TonnopUserValidation = Yup.object().shape({
  firstName: Yup.string().required("Required").min(4, "Atleast 4 characters"),
  lastName: Yup.string().required("Required").min(4, "Atleast 4 characters"),
  email: Yup.string().required("Required").min(4, "Atleast 4 characters"),
  phoneNumber: Yup.string().required("Required").min(10, "Atleast 10 characters").max(11, "Your Phone number must not be more than 11 numbers").matches(/^[0-9]+$/, "Must be only digits"),
  password: Yup.string().min(8, "Atleast 8 characters")
});