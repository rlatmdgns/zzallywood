import * as Styles from './styles'

interface inputInfo {
    labelText ?: string,
    inputId ?: string,
    placeholder ?: string,
    type : string,
    errMsg ?: string ,
    valid ?: boolean
    changeHandler : (e : React.ChangeEvent<HTMLInputElement>) => void
}

const InputForm = ({labelText, type, inputId, placeholder, valid, errMsg, changeHandler} : inputInfo) => {
  return (
      <Styles.InputFormWrap>
        <Styles.InputLabel htmlFor={inputId}>{labelText}</Styles.InputLabel>
        <Styles.InputForm id={inputId} type={type} onChange={changeHandler} placeholder={placeholder}></Styles.InputForm>
        {!valid && 
          <Styles.ErrorMessage>{errMsg}</Styles.ErrorMessage> 
        }
      </Styles.InputFormWrap>
  )
}

export default InputForm