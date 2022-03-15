import React from 'react';
import img1 from '../images/customer.png'
import img2 from '../images/contractor.png'
import img3 from '../images/mockup.png'
import img4 from '../images/finished.png'
import { HomeContainer, HomeContent, HomeHeader, ModelContainer, ModelName, ModelImage } from '../CSS/homePageStyles'

function Home() {
  return (
    <HomeContainer>
        <HomeHeader>Unique cabinetry designs composed just for you </HomeHeader>
        <HomeContent>
            <ModelContainer>
                <ModelName>Contact Us</ModelName>
                <ModelImage><img src={img1} alt="customer" /></ModelImage>
            </ModelContainer>
            <ModelContainer>
                <ModelName>Preparation</ModelName>
                <ModelImage><img src={img2} alt="planning" /></ModelImage>
            </ModelContainer>
            <ModelContainer>
                <ModelName>Execution</ModelName>
                <ModelImage><img src={img3} alt="designing" /></ModelImage>
            </ModelContainer>
            <ModelContainer>
                <ModelName>Voila!</ModelName>
                <ModelImage><img src={img4} alt="final" /></ModelImage>
            </ModelContainer>
        </HomeContent>
    </HomeContainer>
  )
}

export default Home