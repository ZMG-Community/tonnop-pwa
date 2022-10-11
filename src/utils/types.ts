interface SignupType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  bvn: string;
  password: string;
}
interface LogInType {
  email: string;
  password: string;
}
interface SendOTPType {
  email: string;
  otp: string;
}

export { SignupType, LogInType, SendOTPType };
