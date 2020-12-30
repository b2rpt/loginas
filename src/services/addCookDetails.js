import axios from "axios";
import config from "../config";

const addCookDetails = async (values) => {
  let url = config.baseUrl + config.addCookDetailsUrl;
  let body = {
    cookName: values.fullName,
    gender: values.gender,
    experince: values.experince,
    email: values.email,
    mobile: values.mobile,
    address: values.address,
    location: values.location,
    city: values.city,
    state: values.state,
    specialist: values.specialist,
  };
  try {
    return axios
      .post(url, body, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((responce) => {
        console.log("responce", responce);
        return responce;
      });
  } catch (err) {
    console.log(err);
  }
};

export { addCookDetails };
