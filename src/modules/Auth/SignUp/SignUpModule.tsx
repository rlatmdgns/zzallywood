'use client'

import * as Styles from './styles'
import TermBox from "@/common/components/TermBox"
import InputForm from "@/common/components/InputBox/InputForm"

const SignUpModule = () => {
  const test = () => {
    console.log('test')
  }

  return (
    <Styles.Wrapper>
      <TermBox/>
      <InputForm
        labelText="테스트"
        inputId="테스트"
        type="text"
        changeHandler={test}
      />
    </Styles.Wrapper>
  )
}

export default SignUpModule