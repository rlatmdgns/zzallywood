import styled from 'styled-components'

export const LayerPopupDim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`

export const LayerPopup = styled.div`
  position: relative;
  width: 100%;
`

export const LayerPopupHeader = styled.h3`
  font-size: 24px;
  text-align: center;
`

export const LayerPopupContents = styled.div`
  padding: 16px 30px;
`
