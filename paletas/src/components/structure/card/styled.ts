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
  margin: 0.5em;
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
  font-size: 1.3em;
  color: darkslateblue;
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
