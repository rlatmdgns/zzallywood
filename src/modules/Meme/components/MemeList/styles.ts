import styled from 'styled-components'

export const MemeSection = styled.section`
  display:flex;
  flex-wrap:wrap;
  padding:0 16px;
`

export const MemeTitle = styled.h3`
  flex:1 1 100%;
  margin-bottom:10px;
  font-size:16px;
  font-weight:700;
`
export const MemeListWrap = styled.ul`
  flex: 1 1 100%;
  position: sticky;
  display: flex;
  gap: 12px;
`

export const MemeList = styled.li`
  flex:1 1 25%;
`