import styled from 'styled-components'
import { BaseButton } from './BaseButton'

const PrimaryButton = ({children}) => {
  return (
    <Button>
        {children}
    </Button>
  )
}

export default PrimaryButton

const Button = styled(BaseButton)`
    background-color: "40514e;
`