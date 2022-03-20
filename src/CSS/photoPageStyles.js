import styled from 'styled-components';


export const PhotoContainer = styled.div`
    height: 100%;
    width: 100%;
    /* background-color: red; */
`
export const PhotoHeader = styled.div`
    text-align: center;
    /* background-color: blue; */
    padding: 7rem 0rem 0rem 0rem;
    font-size: 4rem;
    font-family: Bebas;
    color: #12130f;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const PhotoContent = styled.div`
    height: 100%;
    /* background-color: green; */
    display: flex;
    justify-content: center;
    margin: 0rem 6rem 5rem 6rem;
`
export const ImgGrid = styled.div`
    display: grid;
    /* background-color: purple; */
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 75px;
    padding: 25px 0px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 50px;
        padding: 50px 0px;
    }

    @media screen and (max-width: 480px){
        grid-template-columns: 1fr 1fr;
        grid-gap: 60px;
        padding: 50px 0px;
    }
`
export const ImgCard = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 400px;
    border-radius: 10px;
    filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.3));
`
export const ImgName = styled.div`

`
export const ImgImg = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-height: 325px;
    border-radius: 10px 10px 0px 0px;
    overflow: hidden;
`
export const ImgInfo = styled.div`
    text-align: center;
    font-family: Bebas;
    font-size: 2rem;
    color: #12130f;
    margin-top: 1rem;
`
