import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import {FeatureImageWrapper} from "../elements"

export const FeatureImage = ({ fixed }) => {
    const data = useStaticQuery(graphql`
    query {
        imageSharp(fixed: {originalName: {eq :"office.jpg"}}){
            fixed{
                ...GatsbyImageSharpFixed
            }
        }
    }
  `)
    return (
        <FeatureImageWrapper>
            <Img fixed={fixed ? fixed : data.imageSharp.fixed} style={{width:"100%"}}/>
        </FeatureImageWrapper>
    )
    
}