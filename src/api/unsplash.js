import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 89ccb8413dd2fac072c0dcbf94f8bd9dc6a104950482f3743eed6aa4a309c366"
  }
});
