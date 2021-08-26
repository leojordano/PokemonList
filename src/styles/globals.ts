import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #343a40;
    font-family: 'Offside', cursive;
    color: white;
    display: flex;
    justify-content: center;
  }
`

export const Container = styled.div`
  width: 80vw;
  height: max-content;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`

export default GlobalStyles