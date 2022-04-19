import styled from "styled-components";

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  width: fit-content;
  max-width: 200px;
  padding: 1em;
  border-radius: 2em;
  margin: 2em 1em;
  margin-bottom: 60px;
  :hover {
    color: black;
    cursor: pointer;
    transition: all 400ms ease;
    transform: scale(1.02);
  }
`;

export const PriceText = styled.h3`
  font-size: 1em;
  color: lightskyblue;
`;

export const DescriptionText = styled.h3`
  display: flex;
  font-size: 1.3em;
  color: darkslateblue;
  flex-wrap: wrap;
`;

type Primary = {
  primary: boolean;
};

export const Buttons = styled.button<Primary>`
  background-color: ${(props) => (props.primary ? "red" : "blue")};
  border: none;
  border-radius: 10px;
  color: ${(props) => (props.primary ? "white" : "orange")};
  padding: 7px 3px;
  margin: 5px;
`;

export const NumberDiv = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
`;

export const NumberElement = styled.h2`
  color: lightskyblue;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonPropertie = styled.button`
  background-color: transparent;
  border: none;
  margin-bottom: 8px;
`;

type Color = {
  color: string;
};

export const ButtonsModal = styled.button<Color>`
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 10px;
  color: white;
  padding: 7px 3px;
  margin: 5px;
`;

export const CloseButtonDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end !important;
`;

export const ModalDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
