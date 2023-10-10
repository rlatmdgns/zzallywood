import styled from 'styled-components'

export const Wrapper = styled.div`
  position:relative;
  border-radius:8px;
  overflow:hidden;
`

export const RankingStarImageWrapper = styled.div`
  position:relative;
  padding-top:100%;
  border-radius:8px;
  overflow:hidden;
  border:1px solid #bebebe;
`

export const RankingNumber = styled.span`
  width:30px;
  height:30px;
  line-height:30px;
  position:absolute;
  top:0;
  left:0;
  z-index:10;
  text-align:center;
  border-radius:4px;
  background:#2e2e2e;
  color:#fff;
`

export const RankingInfomation = styled.div`
  margin-top:10px;
  text-align:center;
`

export const RankingTitle = styled.p`
  font-size:16px;
  font-weight:500;
`

export const RankingPoint = styled.p`
  margin-top:6px;
`
