import * as Styles from './styles'
import React from 'react'

interface LayerPopupProps {
  title: string
  content: React.ReactNode
  onClose: React.MouseEventHandler<HTMLButtonElement>
  onConfirm: React.MouseEventHandler<HTMLButtonElement>
}

const LayerPopup = ({ title, content }: LayerPopupProps) => {
  return (
    <Styles.LayerPopupDim>
      <Styles.LayerPopup>
        <Styles.LayerPopupHeader>{title}</Styles.LayerPopupHeader>
        <Styles.LayerPopupContents>{content}</Styles.LayerPopupContents>
      </Styles.LayerPopup>
    </Styles.LayerPopupDim>
  )
}

export default LayerPopup
