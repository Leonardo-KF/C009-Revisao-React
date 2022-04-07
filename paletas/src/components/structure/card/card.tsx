import React, { useState } from 'react';
import { CardDiv, PriceText, DescriptionText, Buttons, NumberDiv, NumberElement } from "./styled";

type PropsPaleta = {
    descricao: string,
    imagem: string,
    moreInfos: {
        titulo: string,
    },
    price: number,
}


export function Card (props: PropsPaleta) {
    const [paletaAdicionada, setPaletaAdicionada] = useState<number>(0);
    

    function adicionarPaleta() {
        setPaletaAdicionada(paletaAdicionada + 1)
    }
   
    function removerPaleta() {
        setPaletaAdicionada(paletaAdicionada - 1)
    }
    
   
    return(  
        
            <CardDiv>
                <NumberDiv><NumberElement>{paletaAdicionada}</NumberElement></NumberDiv>
                <div>
                    <img src={props.imagem} alt={props.moreInfos.titulo}></img>
                </div>
                <div>
                    <PriceText>R$ {props.price.toFixed(2)}</PriceText>
                    <DescriptionText>{props.descricao}</DescriptionText>
                </div>
                <div> 
                    { paletaAdicionada > 0 ?
                    <>
                        <Buttons primary={false} onClick={adicionarPaleta}>Adicionar</Buttons>
                        <Buttons primary={true} onClick={removerPaleta} >Remover</Buttons>
                    </>
                    :
                        <Buttons primary={false} onClick={adicionarPaleta}>Adicionar</Buttons>
                    }
                </div>
            </CardDiv>
       
    )
}