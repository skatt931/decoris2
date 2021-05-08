import * as React from 'react'
import styles from './styles.module.css'
import styled from 'styled-components'

import { SimpleCard } from './components/simple-card'

export { SimpleCard }

interface Props {
  text: string
  color?: string
}

const StyledDiv = styled.div`
  background-color: rgb(200, 50, 47);
`

export const ExampleComponent = ({ text }: Props) => {
  return (
    <StyledDiv>
      <div className={styles.test}>Example Component 2: {text}</div>
    </StyledDiv>
  )
}
