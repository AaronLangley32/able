import styled from 'styled-components';


export const ContactContainer = styled.div`
    height: 100%;
    width: 100%;
`
export const ContactHeader = styled.div`
    text-align: center;
    padding: 6.5rem 0rem 0rem 0rem;
    font-size: 3rem;
    font-family: Bebas;
    color: #12130f;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ContactContent = styled.div`
    height: 650px;
    display: flex;
    justify-content: center;
    margin: 2rem 6rem 0rem 6rem;
`
export const ContentLeft = styled.div`
    width: 650px;
    height: 650px;
    border-right: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const LeftHeader = styled.div`
    font-size: 2.5rem;
    color: #12130f;
    font-family: Bebas;
    margin: 1.5rem 0rem 1rem 0rem;
    text-decoration: underline;
    text-decoration: underline wavy 0.1rem;
`
export const LeftInfo = styled.div`
    font-size: 1.5rem;
    font-style: italic;
    color: #1b1c18;
    font-family: Bebas;

`
export const ContentRight = styled.div`
    width: 650px;
    height: 650px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
`
export const RightHeader = styled.div`
    font-size: 2.5rem;
    color: #12130f;
    font-family: Bebas;
    margin: 1.5rem 0rem 1rem 0rem;
    text-decoration: underline wavy 0.1rem;
`
export const RightInfo = styled.div`
    text-align: center;
    font-size: 1.5rem;
    font-style: italic;
    color: #1b1c18;
    font-family: Bebas;
    
`