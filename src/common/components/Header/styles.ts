import styled from 'styled-components'

export const Header = styled.header`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content:space-between;
  height: 60px;
  padding: 0 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  background: ${(props) => props.theme.colors.white};
`

export const Title = styled.h1`
  font-size: 18px;
`
