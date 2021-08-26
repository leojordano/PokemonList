import styled, { keyframes } from "styled-components"

const bounceLike = keyframes`
  from {
    opacity: 0;
    transform: scale(1.4);
  } to {
    opacity: 1;
    transform: scale(1);
  }
` 

const opacity = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`

export const SCard = styled.div`
  background-color: rgb(17, 18, 24);
  width: 150px;
  height: 200px;
  margin: 5px;
  color: white;
  text-transform: capitalize;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  animation: ${opacity} 0.5s linear forwards;

`

export const SCardHeader = styled.div`
  width: 100%;
  padding: 10px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

    :after {
      content: '';
      top: 0px;
      left: -5px;
      position: absolute;
      width: 10px;
      height: 100%;
      background-color: ${props => props.color ?? 'red'};
      border-radius: 10px;
    }
`

export const SCardBody = styled.div`
    margin-top: -20px;
    width: 100%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: relative;

    .placeholder {
      width: 50px;
      height: 70px;
      background-color: ${props => props.color ?? 'red'};
      border-radius: 10px;
      left: calc(50% - 30px);
      bottom: calc(50% - 30px);
      position: absolute;
      filter: blur(10px);
      opacity: 0.3;
    }
`

export const SCardFooter = styled.div`
  margin-top: -20px ;
  display: flex;
  justify-content: space-around;
  -webkit-box-align: center;
  align-items: center;

  .likeIcon {
    animation: ${bounceLike} 0.5s linear forwards;
    cursor: pointer;
    font-size: 20px;
    transition-duration: 0.5;

      &:hover {
        color: white;
      }
  }
`

export const placeHolderLoadingImage = styled.div`
  
`