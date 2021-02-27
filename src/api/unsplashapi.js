import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ghmBDkK-eZ2gDWQkHsyHpwU9PmW_pI5wniAVVU1hhvI",
  },
});
