import styled from 'styled-components'

export const Wrapper = styled.div`
  max-height: calc(100vh - 158px);
  padding:30px 16px 30px;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  row-gap: 16px;
`
