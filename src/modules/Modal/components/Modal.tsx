'use client'

import * as Styles from './styles'
import React from 'react'

interface ModalProps {
  title: string
  children?: React.ReactNode
  onConfirm?: () => void
}

const Modal = ({ title, children }: ModalProps) => {
  return (
    <Styles.ModalDim>
      <Styles.Modal>
        <Styles.ModalHeading>
          <Styles.ModalHeader>{title}</Styles.ModalHeader>  
          <Styles.ModalClose></Styles.ModalClose>
        </Styles.ModalHeading>
        <Styles.ModalContents>{children}</Styles.ModalContents>
      </Styles.Modal>
    </Styles.ModalDim>
  )
}

export default Modal