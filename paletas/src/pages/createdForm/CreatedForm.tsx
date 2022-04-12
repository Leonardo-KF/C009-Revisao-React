import React, { useState } from 'react'

type Paleta = {
    descricao: string,
    foto: string,
    moreInfos: {
        possuiRecheio: boolean,
        recheio?: string,
        titulo: string
    },
    preco: number,
    sabor: string,
}


export function CreatedForm() {
    const [existeRecheio, setExisteRecheio] = useState<boolean>(false);
    const [paleta, setPaleta] = useState<Paleta>({
        descricao: "",
        foto: "",
        moreInfos: {
            possuiRecheio: false,
            titulo: ""
        },
        preco: 0,
        sabor: "", 
    });

    function submitForm(event: React.FormEvent) {
       event.preventDefault();

       
    //    const descricao = 
    //    const paleta = {
    //        descricao:,
    //    }
        console.log("enviando...");
    }

    function AddRecheio(){
        setExisteRecheio(true);
    }

    function RemoveRecheio() {
        setExisteRecheio(false);
    }


  return (
    <div>
        <form onSubmit={submitForm}>
            <div>
                <span>Titulo: </span>
                <input type="text" name="titulo" onChange={e => setPaleta((paleta))} placeholder="Digite o titulo"/>
            </div>
            <div>
                <span>Sabor: </span>
                <input type="text" placeholder="Digite o sabor" name="sabor"/>
            </div>
            <div>
                <span>Foto: </span>
                <input type="text" name="imagem" placeholder="Digite o caminho da imagem"/>
            </div>
            <div>
                <span>Descrição: </span>
                <input type="text" name="descricao" placeholder="Digite a descrição da paleta"/>
            </div>
            <div>
                <span>Preço: </span>
                <input name="preco" type="number"></input>
            </div>
            <div>
                <span>Recheio: </span>
                <button type="button" onClick={existeRecheio ? RemoveRecheio : AddRecheio}>{existeRecheio ? "Remover Recheio" : "Adicionar Recheio"}</button>
                {existeRecheio ? <input name="recheio" type="text" placeholder="Digite o recheio"></input> : null}
            </div>
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}
