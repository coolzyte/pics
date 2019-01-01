import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID b6edd98cef527cb8438b900f56b7790a32231c4205d2a9f4c98a28fa4eeaad3a"
  }
});
