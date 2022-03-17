import styled from 'styled-components';


export const HomeContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: #ffffff;
`
export const HomeContent = styled.div`
    background-color: #ffffff;
    height: 500px;
    display: flex;
    margin: 5rem 6rem 0rem 6rem;
    justify-content: center;
`
export const HomeHeader = styled.div`
    text-align: center;
    padding: 8rem 0rem 0rem 0rem;
    font-size: 5rem;
    color: #000000;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ModelContainer = styled.div`
    height: 25rem;
    width: 20rem;
    margin: 0rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ModelName = styled.div`
    margin: 0rem 0rem;
    color: #000000;
    font-size: 2.2rem;
    font-style: italic;
    transform: translateY(150%);

    @keyframes textLoop {
        0% {
            transform: translateY(150%);
        }
        40% {
            transform: translateY(150%);
        }
        50% {
            transform: translateY(-5%);
        }
        60% {
            transform: translateY(-5%);
        }
        70% {
            transform: translateY(150%);
        }

    }
`
export const ModelImage = styled.div`
    height: 25rem;
    width: 20rem;
    margin: 1rem 0rem 0rem 0rem;
    padding: 0rem 0.5rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    border-left: white 1px;
    border-right: white 1px;
    
    /* filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.40)); */
    
    @keyframes scaleLoop {
        0% {
            transform: scale(1);
            
        }
        40% {
            transform: scale(1);
            
        }
        50% {
            transform: scale(1.1);
            filter: grayscale(0%);
        }
        60% {
            transform: scale(1.1);
            filter: grayscale(0%);
        }
        70% {
            transform: scale(1);
            
        }

    }

`