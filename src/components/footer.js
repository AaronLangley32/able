import React from 'react'
import { FooterContainer, FooterSocials, SocialsLink, FooterCopyright } from '../CSS/footerStyles'
import { BiCopyright } from 'react-icons/bi'
export const Footer = () => {
  return (
    <FooterContainer>
        <FooterSocials>
            <SocialsLink>(772) 486-4042 | AbleClosets@gmail.com</SocialsLink>
        </FooterSocials>
        <FooterCopyright>
            Copyright <BiCopyright style={{'fontSize': '0.8rem', 'margin': '0.2rem 0.3rem 0.25rem 0.4rem'}}/> 2022 Able Closets Inc | Stuart FL
        </FooterCopyright>
    </FooterContainer>
  )
}
export default Footer