import React, { useState, useEffect } from 'react';
import { Card } from "../../components/structure/card/card";
import { HomeDiv, InvisibleButton } from "./style";
import { paletaApi } from "../../services/paletaApi";
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
  const [paletas, setPaletas] = useState<Paleta[]>();
  const [openModal, setOpenModal] = useState<boolean>(false);

  async function getPaletas() {

    const req = await paletaApi.getPaletas();
    
    setPaletas(req)
  }

  function modalControl(){
    console.log(openModal);
    if (openModal === false) {
        setOpenModal(true);
    } else {
        setOpenModal(false);
    }
}

  useEffect(() => {
    getPaletas();
  }, []);
  
  console.log(paletas);


  return (
    <>
      
      <HomeDiv>
        {paletas?.map(paleta => {
          return (
          <InvisibleButton onClick={modalControl} key={paleta._id}>
            <Card 
            descricao={paleta.descricao}
            imagem={paleta.foto}
            moreInfos={paleta.moreInfos}
            price={paleta.preco}
            />
          </InvisibleButton>
          )
        })}
      </HomeDiv>
      {openModal ?
      <div className="container">
        <div className="modal-dialog modal-dialog-centered modal-app">
          <div className="modal-card">
            <div>foto</div>
            <div>recheio</div>
            <div>preco</div>
            <div>descricao</div>
            
          </div>
        </div> 
      </div>
        : null
      
      } 
     
    </>
  );
}


