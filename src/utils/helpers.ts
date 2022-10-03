import axios from "axios";
import { atom } from "recoil";
import * as Yup from "yup";

const newRecord = atom({
  key: "userRecord",
  default: [],
});

const userEmail = atom({
  key: "userEmail",
  default: "",
});

const regUser = async (data: initialUser) => {
  let config = {
    method: "post",
    url: "https://blocboxwallet.herokuapp.com/api/v1/accounts/record/register",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };
  try {
    const res = await axios(config);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getAuthToken = async () => {
  let config = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      username: "DraqTest",
      password: "Draq1234",
    }),
    url: "https://blocboxwallet.herokuapp.com/api/token/",
  };
  try {
    const res = await axios(config);
    return res?.data.access;
  } catch (error) {
    console.log(error);
  }
};

const ListRecords = async (token: string) => {
  let config = {
    method: "get",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    url: "https://blocboxwallet.herokuapp.com/api/v1/users/record",
  };
  try {
    const res = await axios(config);
    const record = res;
    return record.data;
  } catch (error) {
    console.log(error);
  }
};
const createRecord = async (data: initialUser, token: string) => {
  let config = {
    method: "post",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: JSON.stringify(data),
    url: "https://blocbox02.herokuapp.com/api/v1/records",
  };
  try {
    const res = await axios(config);
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

const FetchRecord = async (id: string, token: string) => {
  let config = {
    method: "get",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    url: `https://blocboxwallet.herokuapp.com/api/v1/users/record/${id}`,
  };
  try {
    const res = await axios(config);
    const record = res;
    return record.data;
  } catch (error) {
    console.log(error);
  }
};

const UpdateFullRecord = async (data: initialUser, token: string, id: string) => {
  let config = {
    method: "put",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: JSON.stringify(data),
    url: `https://blocbox02.herokuapp.com/api/v1/records/${id}/`,
  };
  try {
    const res = await axios(config);
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};
const deleteRecord = async (id: string, token: string) => {
  let config = {
    method: "del",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    url: `https://blocbox02.herokuapp.com/api/v1/records/${id}/`,
  };
  try {
    const res = await axios(config);
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

interface initialUser {
  first_name: string,
  last_name: string,
  email: string,
  phone_number: string,
  password: string,
}
const initialUser: initialUser = {
  email: "",
  password: "",
  last_name: "",
  first_name: "",
  phone_number: "",
};

const SignUpValidations = Yup.object().shape({
  first_name: Yup.string().required("Required").min(4, "Atleast 4 characters"),
  last_name: Yup.string().required("Required").min(4, "Atleast 4 characters"),
  email: Yup.string().required("Required").min(4, "Atleast 4 characters"),
  phone_number: Yup.string().required("Required").min(10, "Atleast 10 characters"),
  password: Yup.string().min(8, "Atleast 8 characters")
});

export {
  ListRecords,
  getAuthToken,
  regUser,
  initialUser,
  SignUpValidations,
  newRecord,
  userEmail,
};
