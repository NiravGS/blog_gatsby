import React from "react"
import Styled from "styled-components"
import { Link } from "gatsby"

export const ButtonWrapper = Styled(props => <Link {...props} />)`
    padding:0.5rem 0.75rem;
    background-color:${props => props.theme.color.main1};
    color:${props => props.theme.color.light1};
    font-weight:700;
    font-size:0.875rem;
    width:fit-content;
    transition:filter 0.3s ease;
    cursor:pointer;
    text-decoration:none;
    &:hover,
    &:focus{
        filter:brightness(110%);
    }
    

`