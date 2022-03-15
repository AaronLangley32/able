import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import logoImg from '../images/logo_white.png'

export const NavContainer = styled.div`
    background: #12130f;
    height: 90px;
    width: 100%;
    position: sticky;
    z-index: 10;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
    position: relative;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavLogo = styled.div`
    background-image: url(${logoImg});
    background-position: center;
    height: 90px;
    width: 180px;
    background-size: cover;
    position: absolute;
    margin-left: 2rem;
`
export const Nav = styled.nav`
    height: 90px;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
`
export const Link = styled(LinkR)`
    margin: 0rem 2rem;
`