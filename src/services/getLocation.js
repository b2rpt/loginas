import axios from "axios";
import config from "../config";

const getLocation = async () => {
  const url = config.baseUrl + config.locationUrl;

  try {
    return await axios.get(url).then((responce) => {
    //   console.log(responce);
      return responce
    });
  } catch (err) {
    console.log("err");
  }
};

export { getLocation };
