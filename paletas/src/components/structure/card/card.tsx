import React from 'react';
import { CardDiv, PriceText, DescriptionText, Buttons } from "./styled";


export function Card (props: any) {
    return(  
        <CardDiv>
            <div>
                <img src={props.imagem} alt={props.moreInfos.titulo}></img>
            </div>
            <div>
                <PriceText>R$ 10.00</PriceText>
                <DescriptionText>{props.descricao}</DescriptionText>
            </div>
            <div>
                <Buttons primary={false}>Adicionar</Buttons>
                <Buttons primary={true}>Remover</Buttons>
            </div>
        </CardDiv>
    )
}