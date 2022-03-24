import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100%;
    height: 30px;
    background-color: #00000075;
    position: absolute;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FooterSocials = styled.div`
    margin-right: auto;
    margin-left: 4rem;
    font-size: 0.8rem;
    
    @media screen and (max-width: 1300px){
        margin-left: 4rem;
        font-size: 0.8rem;
    }

    @media screen and (max-width: 650px){
        margin-right: 0rem;
        margin-left: 0rem;
        font-size: 0.8rem;
    }
`
export const SocialsLink = styled.div`

`
export const FooterCopyright = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    color: #000000;
    margin-right: 4rem;

    @media screen and (max-width: 1300px){
        margin-right: 4rem;
        font-size: 0.8rem;
    }

    @media screen and (max-width: 650px){
        display: none;
    }
`