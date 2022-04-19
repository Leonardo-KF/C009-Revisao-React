import React, { useState } from 'react';
import { CardDiv, PriceText, DescriptionText, ModalDiv, Buttons, NumberDiv, NumberElement, ButtonsDiv, ButtonPropertie, ButtonsModal, CloseButtonDiv } from "./styled";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineCloseCircle} from "react-icons/ai";
import { paletaApi } from "../../../services/paletaApi";


type PropsPaleta = {
    id: string,
    descricao: string,
    imagem: string,
    moreInfos: {
        titulo: string,
    },
    price: number,
}


export function Card (props: PropsPaleta) {
    
    const navigate = useNavigate();

    const [paletaAdicionada, setPaletaAdicionada] = useState<number>(0);
    const [modalIsOpen, setModalIsOpen ] = useState<boolean>(false);
    
    // estilização do react-modal
    const customStyles = {
        overlay: {
            backgroundColor: "rgb(50,50,50, 0.72)"
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

      
    function redirectToUpdate() {
        navigate("/update/" + props.id);
    }

    async function deletePaleta() {
        try { 
        const req = await paletaApi.deletePaleta(props.id);
        console.log(req);
        closeModal()
        } catch (err) {
            alert(err);
        }
    }

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }


    function adicionarPaleta() {
        setPaletaAdicionada(paletaAdicionada + 1)
    }
   
    function removerPaleta() {
        setPaletaAdicionada(paletaAdicionada - 1)
    }
    
   
    return(  
        
            <CardDiv>
                <ButtonsDiv>
                    <NumberDiv><NumberElement>{paletaAdicionada}</NumberElement></NumberDiv>
                    <ButtonPropertie onClick={openModal}><BsPencilSquare color='lightskyblue' size={25}/></ButtonPropertie>
                </ButtonsDiv>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >   
                <ModalDiv>
                    <CloseButtonDiv>
                        <ButtonPropertie onClick={closeModal}><AiOutlineCloseCircle size={25} color="red"/></ButtonPropertie>
                    </CloseButtonDiv>
                    <div>
                        <img src={props.imagem} alt={props.moreInfos.titulo}></img>
                    </div>
                    <div>
                        <h2>{props.moreInfos.titulo}</h2>
                        <PriceText>R$ {props.price.toFixed(2)}</PriceText>
                        <DescriptionText>{props.descricao}</DescriptionText>
                    </div>
                    <div>
                        <ButtonsModal onClick={deletePaleta} color={"red"}>Deletar</ButtonsModal>
                        <ButtonsModal onClick={redirectToUpdate} color={"lightskyblue"}>Atualizar</ButtonsModal>
                    </div>
                </ModalDiv>
                </Modal>
                    <div>
                        <img src={props.imagem} alt={props.moreInfos.titulo}></img>
                    </div>
                    
                    <div>
                        <PriceText>R$ {props.price.toFixed(2)}</PriceText>
                        <DescriptionText>{props.moreInfos.titulo}</DescriptionText>
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