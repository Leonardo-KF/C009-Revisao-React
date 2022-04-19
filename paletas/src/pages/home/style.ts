import styled from "styled-components";

export const HomeDiv = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 107px);
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  z-index: 0;
  position: absolute;
`;

export const InvisibleButton = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
`;
