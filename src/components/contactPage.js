import React from 'react';
import { ContactContainer, ContactContent, ContactHeader, ContentLeft, ContentRight } from '../CSS/contactPageStyles';


function Contact() {
  return (
    <ContactContainer>
      <ContactHeader>Hello World</ContactHeader>
      <ContactContent>
        <ContentLeft>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14188.779650577995!2d-80.2378521!3d27.2444157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x519fddd59e7c8d5e!2sAble%20Closets!5e0!3m2!1sen!2sus!4v1647562211380!5m2!1sen!2sus" title="Showroom" width="600" height="450" style={{'border': 'none'}} allowFullScreen="" loading="lazy"></iframe>
        </ContentLeft>
        <ContentRight>

        </ContentRight>
      </ContactContent>
    </ContactContainer>
  )
}

export default Contact