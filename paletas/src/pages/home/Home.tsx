import React, { useState, useEffect } from 'react';
import { Card } from "../../components/structure/card/card";
import { HomeDiv, InvisibleButton } from "./style";
import { paletaApi } from "../../services/paletaApi";
import { useSearch } from "../../hooks/useSearch";
import { useLocalStorage } from 'react-use';
import "./Style.css";

type Paleta = {
  _id: string,
  created: string,
  descricao: string,
  foto: string,
  moreInfos: {
    titulo: string,
  },
  preco: number,
}

// desing pattern: Factory

export function Home() {

  const [value, setValue, remove] = useLocalStorage<Paleta[]>('paletas');
  const [paletas, setPaletas] = useState<Paleta[]>();
  const {search} = useSearch();
  

  async function getPaletas() {
    const req = await paletaApi.getPaletas();
    setPaletas(req);
  }

  console.log(value);

  useEffect(() => {
    getPaletas();
    
  }, []);
  


  return (
    <>
      
      <HomeDiv>
        {paletas?.filter((Paleta) => Paleta.moreInfos.titulo.toLowerCase().includes(search.toLowerCase())).map(paleta => {
          return (
            <Card 
            id={paleta._id}
            descricao={paleta.descricao}
            imagem={paleta.foto}
            moreInfos={paleta.moreInfos}
            price={paleta.preco}
            />
          )
        })}
      </HomeDiv>
    </>
  );
}


