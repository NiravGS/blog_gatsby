import React from "react"
import { graphql } from "gatsby"
import { Container, Content, ContentCard, FeatureImage, Pagination } from "../components"
import { H1, P } from "../elements"

const allPosts = ({ pageContext, data }) => {
    const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1
    const ifLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : `${currentPage - 1}`
    const nextPage = `/${currentPage + 1}`
    const posts = 
}