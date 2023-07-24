import styled from 'styled-components'

export const NavigationItem = styled.li`
  flex-grow: 1;
`
export const NavigationText = styled.span`
  display: block;
  width: 100%;
  text-align: center;
`

export const UploadButtonWrap = styled.div`
  position: relative;
`

export const UploadInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
`

export const UploadButton = styled.label`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  background: #bebebe;
  transform: translate(-50%, -100%);
`
