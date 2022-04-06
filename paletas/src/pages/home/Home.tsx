import React, { useState, useEffect } from 'react';
import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer/footer";
import { Card } from "../../components/structure/card/card";
import { HomeDiv } from "./style";
import { paletaApi } from "../../services/paletaApi";

type Paleta = {
  _id: string,
  created: string,
  descricao: string,
  foto: string,
  moreInfos: object,
  price: number,
}

// desing pattern: Factory

export function Home() {
  const [paletas, setPaletas] = useState<Paleta[]>();

  async function getPaletas() {

    const req = await paletaApi.getPaletas();
    
    setPaletas(req)
  }

  useEffect(() => {
    getPaletas();
  }, []);
  
  console.log(paletas);


  return (
    <>
      <Header/>
      <HomeDiv>
        {paletas?.map(paleta => {
          return <Card 
          key={paleta._id}
          descricao={paleta.descricao}
          imagem={paleta.foto}
          moreInfos={paleta.moreInfos}
          price={paleta.price}
          />
        })}
      </HomeDiv>
      <Footer/>
    </>
  );
}


