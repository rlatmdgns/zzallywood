import { createPortal } from "react-dom"

const IdolModal = (content : React.ReactNode ) => {
  const modalRoot = document.getElementById('modal') as HTMLElement
  return (
    <>
      {createPortal(content , modalRoot )}
    </>
  )
}

export default IdolModal
