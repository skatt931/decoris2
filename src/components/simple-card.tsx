import * as React from 'react'
import styled from 'styled-components'

interface Props {
  text: string
  color?: string
}

const StyledSimpleCard = styled.div`
  background-color: rgb(60, 200, 47);
`

export const SimpleCard = ({ text }: Props) => {
  return (
    <StyledSimpleCard>
      <div>Here will be the simple card component: {text}</div>
    </StyledSimpleCard>
  )
}
