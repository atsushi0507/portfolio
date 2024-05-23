import styled from 'styled-components'

const BaseLink = ({ href, children }) => {
  return (
    <Link href={href}>{children}</Link>
  )
}

export default BaseLink

const Link = styled.a`
    color: #5d5d5b;
    background-color: "fff;
    padding: 3px 2px;
    margin: 8px 5px;
    border: none;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`