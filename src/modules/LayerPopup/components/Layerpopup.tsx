import {useState} from "react";
import * as Styles from './styles'

interface LayerPopupProps {
  title : string,
  content : React.ReactNode,
  onClose : React.MouseEventHandler<HTMLButtonElement>
  onConfirm : React.MouseEventHandler<HTMLButtonElement>
}

// Context API를 이용하여, 레이어 팝업의 상태를 체크
const LayerPopup = ({title, content} : LayerPopupProps) =>{ 
  return (
    <Styles.LayerPoupDim>
      <Styles.LayerPopup>
        <Styles.LayerpopupHeader>{title}</Styles.LayerpopupHeader>
        <Styles.LayerpopupContents>
          {content}
        </Styles.LayerpopupContents>
      </Styles.LayerPopup>
    </Styles.LayerPoupDim>
  )
}

export default LayerPopup