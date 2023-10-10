import { createPortal } from "react-dom"

const Modal = (content : React.ReactNode ) => {
  const modalRoot = document.getElementById('modal') as HTMLElement
  return (
    <>
      {createPortal(content , modalRoot )}
    </>
  )
}

export default Modal
