import axios from "axios";

export default axios.create({
  baseURL: "https://sandbox.payonus.com/auth/api/v1",
});
