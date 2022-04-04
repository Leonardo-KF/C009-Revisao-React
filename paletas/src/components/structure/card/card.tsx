import React from 'react';
import { CardDiv } from "./styled";


export function Card () {
    return(  
        <CardDiv>
            <div>
                <h3>R$ 10.00</h3>
                <h3>Descrição da paleta</h3>
            </div>
            <div>
                <img src="./images/coco.png" alt="Imagem da paleta de cocô"></img>
            </div>
            <div>
                <button className="btn-adicionar">Adicionar</button>
            </div>
        </CardDiv>
    )
}