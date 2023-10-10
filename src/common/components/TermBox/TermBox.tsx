'use client'

import * as Styels from './styles'
import InputForm from '../InputBox/InputForm'

interface TermBoxInterface {
  title ?: string
  desc : string
  required : boolean
  agreeYn : boolean
}
const test = () => {
  console.log('test')
}

const TermBox = () => {
  return (
    <Styels.TermBox>
      <Styels.TermTitle>약관 제목</Styels.TermTitle>
      <Styels.TermDesc>약관 상세 내용</Styels.TermDesc>
      <InputForm
        labelText="테스트"
        inputId="test"
        type="checkbox"
        changeHandler={test}
      />
    </Styels.TermBox>
  )
}

export default TermBox;