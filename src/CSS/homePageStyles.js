import styled from 'styled-components';
import img1 from '../images/customer.jpg';


export const HomeContainer = styled.div`
    height: 90vh;
    width: 100%;
    background-color: #ffffff;
`
export const HomeContent = styled.div`
    background-color: #ffffff;
    height: 600px;
    display: flex;
    padding: 5rem;
    justify-content: center;
`
export const HomeHeader = styled.div`
    text-align: center;
    padding: 5rem 0rem 0rem 0rem;
    font-size: 3rem;
    color: #000000;
    text-transform: capitalize;
`
export const ModelContainer = styled.div`
    background-color: #ffffff;
    height: 25rem;
    width: 20rem;
    margin: 0rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ModelName = styled.div`
    margin: 1rem 0rem;
    color: #000000;
    font-size: 2rem;
`
export const ModelImage = styled.div`
    height: 15rem;
    width: 15rem;
    border-radius: 7.5rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.40));

    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
        overflow: visible;
        cursor: pointer;  
    }

`