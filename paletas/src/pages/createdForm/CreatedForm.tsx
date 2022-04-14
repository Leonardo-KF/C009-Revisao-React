import React, { useState, useEffect } from 'react';
import { paletaApi } from "../../services/paletaApi";
import { useParams, useNavigate } from "react-router-dom";

type Infos = {
    possuiRecheio: boolean,
    recheio?: string,
    titulo: string
}

type Paleta = {
    descricao: string,
    foto: string,
    moreInfos: Infos,
    preco: number,
    sabor: string,
}

type Update = {
    update?: boolean,
}


export function CreatedForm(props: Update) {

    const navigate = useNavigate();

    const { id } = useParams();    

    const [existeRecheio, setExisteRecheio] = useState<boolean>(false);

    const [infos, setInfos] = useState<Infos>({
        possuiRecheio: false,
        recheio: "",
        titulo: ""
    });

    const [paleta, setPaleta] = useState<Paleta>({
        descricao: "",
        foto: "",
        moreInfos: infos,
        preco: 0,
        sabor: "", 
    });
    
    const [loadGetPaleta, setLoadGetPaleta] = useState<boolean>(false);

    async function getPaletaForUpdate() {
        if (id !== undefined) { 
            const paletaForUpdate = await paletaApi.findPaletaById(id);
            setPaleta(paletaForUpdate);
        }
    }

    useEffect(() => {
        if (props.update && !loadGetPaleta) {
           getPaletaForUpdate();
           setLoadGetPaleta(true);
        }
        setPaleta({...paleta, moreInfos: infos});
    }, [infos]);
    
    async function submitForm(event: React.FormEvent<HTMLFormElement>) {
       event.preventDefault();

            /* outra opção para capturar os inputs
            const paleta = {
            descricao: event.currentTarget.descricao.value, 
            foto: event.currentTarget.imagem.value,
            moreInfos: { 
                            possuiRecheio: event.currentTarget.descricao.value,
                            recheio?: event.currentTarget.recheio.value,
                            titulo: event.currentTarget.titulo.value
                        },
            preco: event.currentTarget.preco.value,
            sabor: event.currentTarget.sabor.value,
            }
            */
        console.log(paleta);
        if (id !== undefined) {
           const req = await paletaApi.updatePaletaById(id, paleta);
           if (req?.status === 200) {
             navigate("/");
           };
        } else { 
           const req = await paletaApi.postPaleta(paleta);
            if (req?.status === 201) {
                navigate("/");
            };
        }
    }

    function AddRecheio(){
        setExisteRecheio(true);
    }

    function RemoveRecheio() {
        setExisteRecheio(false);
    }

    console.log(paleta.preco);

  return (
    <div>
        <form onSubmit={submitForm}>
            <div>
                <span>Titulo: </span>
                <input type="text" name="titulo" defaultValue={paleta.moreInfos.titulo} onChange={e => setInfos({...infos, titulo: e.target.value})} placeholder="Digite o titulo"/>
            </div>
            <div>
                <span>Sabor: </span>
                <input type="text" defaultValue={paleta.sabor} onChange={e => setPaleta({...paleta, sabor: e.target.value})} placeholder="Digite o sabor" name="sabor"/>
            </div>
            <div>
                <span>Foto: </span>
                <input type="text" name="imagem" defaultValue={paleta.foto} onChange={e => setPaleta({...paleta, foto: e.target.value})} placeholder="Digite o caminho da imagem"/>
            </div>
            <div>
                <span>Descrição: </span>
                <input type="text" name="descricao" defaultValue={paleta.descricao} onChange={e => setPaleta({...paleta, descricao: e.target.value})} placeholder="Digite a descrição da paleta"/>
            </div>
            <div>
                <span>Preço: </span>
                <input name="preco" value={paleta.preco.toFixed(2)} onChange={e => setPaleta({...paleta, preco: parseFloat(e.target.value)})} type="number" step="0.1"></input>
            </div>
            <div>
                <span>Recheio: </span>
                <button type="button" onClick={existeRecheio ? RemoveRecheio : AddRecheio}>{existeRecheio ? "Remover Recheio" : "Adicionar Recheio"}</button>
                {existeRecheio ? <input name="recheio" defaultValue={paleta.moreInfos.recheio} onChange={e => setInfos({...infos, recheio: e.target.value, possuiRecheio: true})} type="text" placeholder="Digite o recheio"></input> : null}
            </div>
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}
