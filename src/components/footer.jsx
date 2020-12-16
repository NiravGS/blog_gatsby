import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <Link to="/" target="_blank" rel="noopener noreferrer">
            <img src={data.facebook.publicURL} alt="" />
          </Link>
          <Link to="/" target="_blank" rel="noopener noreferrer">
            <img src={data.instagram.publicURL} alt="" />
          </Link>
          <Link to="/" target="_blank" rel="noopener noreferrer">
            <img src={data.linkedin.publicURL} alt="" />
          </Link>
          <Link to="/" target="_blank" rel="noopener noreferrer">
            <img src={data.twitter.publicURL} alt="" />
          </Link>
        </FooterSocialIcons>
        <p>© 2020 Company. All right reserved. </p>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
