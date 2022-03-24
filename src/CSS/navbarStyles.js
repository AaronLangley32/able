import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logoImg from '../images/logo_white.png'

export const NavContainer = styled.div`
    background: #12130f;
    height: 90px;
    width: 100%;
    position: fixed;
    z-index: 10;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
    
    @media screen and (max-width: 1300px) {
        
    }
    @media screen and (max-width: 650px) {
        
    }
`
export const NavLogo = styled.div`
    background-image: url(${logoImg});
    background-position: center;
    height: 80px;
    width: 160px;
    background-size: cover;
    margin-right: auto;
    margin-left: 1rem;

    @media screen and (max-width: 1300px) {
        height: 70px;
        width: 140px;
        margin-left: 1rem;
    }
    @media screen and (max-width: 650px) {
        height: 60px;
        width: 120px;
        margin-left: 0.5rem;
    }
`
export const NavPhoneEmail = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;

    @media screen and (max-width: 1300px) {
        margin-right: 1.5rem;
    }
    @media screen and (max-width: 650px) {
        display: none;
    }
`
export const NavPhoneButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const NavEmailButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Nav = styled.nav`
    height: 90px;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
`
export const Link = styled(NavLink)`
    margin: 0rem 2rem;
    font-size: 1.5rem;

    @media screen and (max-width: 1300px) {
        font-size: .9rem;
        margin: 0rem 1rem;
    }
    @media screen and (max-width: 650px) {
        display: none;
    }
`
export const LinkSpacer = styled.div`
    font-size: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
   
    @media screen and (max-width: 1300px) {
        font-size: 0.4rem;
    }
    @media screen and (max-width: 650px) {
        display: none;
    }

`
export const DropdownBars = styled.div`
    display: none;
    
    @media screen and (max-width: 1300px) {
        display: none;
    }
    @media screen and (max-width: 650px) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        font-size: 2.5rem;
        cursor: pointer;
    }
`