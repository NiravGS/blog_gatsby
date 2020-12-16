import React from "react"
import { ContainerWreapper } from "../elements"
import { Nav, Footer } from "../components"

export const Container = ({ children }) => {
  return (
    <ContainerWreapper>
      <Nav />
      {children}
      <Footer />
    </ContainerWreapper>
  )
}
