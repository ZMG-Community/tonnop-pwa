import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import Detailspage from "./pages/Details/Detailspage";
import Homepage from "./pages/Homepage";
import KYCOutlet from "./pages/KYC";
import BVN from "./pages/KYC/BVN";
import KYC from "./pages/KYC/KYC";
import NIN from "./pages/KYC/NIN";
import PassportNumber from "./pages/KYC/PassportNumber";
import PasswordSetup from "./pages/KYC/PasswordSetup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import VerifyUser from "./pages/VerifyUser";
import Wallet from "./pages/Wallet";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { GlobalStyles } from "./styles/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="register" element={<Register />} />
          <Route path="verify" element={<VerifyUser />} />
          <Route element={<KYCOutlet />}>
            <Route path="kyc" element={<KYC />} />
            <Route path="bvn" element={<BVN />} />
            <Route path="nin" element={<NIN />} />
            <Route path="passport" element={<PassportNumber />} />
          </Route>
          <Route path="password" element={<PasswordSetup />} />
          <Route path="login" element={<Login />} />
          <Route path="reset" element={<Reset />} />
          <Route path="home" element={<Homepage />}>
            <Route path="spots" element={<KYC />} />
          </Route>
          <Route path="details" element={<Detailspage />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
