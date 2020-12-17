import styled from "styled-components"

export const NavWrapper = styled.nav`
    grid-area: 1 / 2 / 2 / span 12;
    display: flex;
    -webkit-box-align: center;
    align-items: center;


    @media ${props => props.theme.breakpoints.tablet}{
        grid-column:2 / span 6;
    }

    & img{
            height: 30px;
    }

`
