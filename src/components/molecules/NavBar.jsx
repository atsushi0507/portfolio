import styled from 'styled-components'
import BaseLink from '../atoms/BaseLink'
import logo from "../../public/logo.png";

const NavBar = () => {
  return (
    <Header>
        <Navigation>
            <Image src={logo} alt="logo" />
            <BaseLink href="/">Home</BaseLink>
            <BaseLink href="/about">About Me</BaseLink>
            <BaseLink href="/blog">Blog</BaseLink>
            <BaseLink href="/contact">Contact</BaseLink>
        </Navigation>
    </Header>
  )
}

export default NavBar

const Header = styled.header`
    background-color: #fff;
    padding: 6px 8px;
    margin: 0px;
    align-items: center;
`

const Navigation = styled.nav`
    align-items: center;
    padding: 5px;
    display: flex;
`

const Image = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`