import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers.post["Content-Type"] = "application/json";

type Paleta = {
  descricao: string;
  foto: string;
  moreInfos: {
    possuiRecheio: boolean;
    recheio?: string;
    titulo: string;
  };
  preco: number;
  sabor: string;
};

export const paletaApi = {
  getPaletas: async () => {
    try {
      const req = await axios.get("/paletas/all-paletas");
      return req.data;
    } catch (err) {
      alert(err);
    }
  },

  postPaleta: async (paleta: Paleta) => {
    try {
      const req = await axios.post("/paletas/create-paleta", paleta);
      return req.data;
    } catch (err) {
      alert(err);
    }
  },

  findPaletaById: async (id: string) => {
    try {
      const req = await axios.get("/paletas/one-paleta/" + id);
      return req.data;
    } catch (err) {
      alert(err);
    }
  },
};
