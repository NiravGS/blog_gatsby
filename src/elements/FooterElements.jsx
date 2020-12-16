import Styled from "styled-components"

export const FooterWrapper = Styled.footer`
    grid-column: 2 / span 12;
    min-height: 11.25rem;
    padding: 3rem 0px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: flex-start;

    @media ${props => props.theme.breakpoints.tablet}{
        grid-column:2 / span 6;
    }
`

export const FooterSocialWrapper = Styled.div`
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    & p{
        text-align: center;
        flex:0 0 100%;
    }
`
export const FooterSocialIcons = Styled.div`
    flex: 0 0 100%;
    margin-bottom: 2rem;
        & img{
            height: 22px;
            padding: 0px 1rem;
            transition: filter 0.3s ease 0s;
        }
        & img:hover, img:focus{
            filter: brightness(50%);
        }
`
 