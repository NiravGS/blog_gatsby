import React from "react"
import { NavWrapper } from "../elements"
import { Link } from "gatsby"

export const Nav = () => {
  return (
    <NavWrapper>
      <Link to="/">
        <h1>G-code</h1>
      </Link>
    </NavWrapper>
  )
}

