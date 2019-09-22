import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID dd03939bd32ac1176609b17dc3ee11c3360b54be208a03ab333bbfed1af13794"
  }
});
