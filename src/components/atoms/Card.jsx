import styled from 'styled-components'

export const Card = ({children}) => {
  return (
    <CardContainer>
        {children}
    </CardContainer>
  )
}

export default Card;

const CardContainer = styled.div`
    background-color: #fff;
    box-shadow: #ddd 0px 0px 4px 2px;
    border-radius: 8px;
    padding: 16px;
    border: 2px solid #fff3f3;
`