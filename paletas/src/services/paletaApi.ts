import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const paletaApi = {
  getPaletas: async () => {
    try {
      const req = await axios.get("/paletas/all-paletas");
      return req.data;
    } catch (err) {
      alert(err);
    }
  },
};
