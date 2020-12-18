import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import {FeatureImageWrapper} from "../elements"

export const FeatureImage = ({ fixed }) => {
    const data = useStaticQuery(graphql`
    query {
        office: file(relativePath: { eq: "office.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000 ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)
    return (
        <FeatureImageWrapper>
           <Img fluid={data.office.childImageSharp.fluid} />
        </FeatureImageWrapper>
    )
    
}