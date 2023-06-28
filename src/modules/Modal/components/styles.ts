import styled from 'styled-components'

export const ModalDim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`

export const Modal = styled.div`
  position: relative;
  padding:20px;
  max-width: 50vw;
  max-height:50vh;
  background-color:#fff;
  border-radius:8px;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
`

export const ModalHeader = styled.div`
  position:relative;
`

export const ModalHeading = styled.h3`
  font-size: 24px;
  text-align: center;
`

export const ModalClose = styled.button`
  width:30px;
  height:30px;
  position:absolute;
  top:20px;
  right:20px;
  background:#000;
`

export const ModalContents = styled.div`
  padding: 16px 30px;
`
