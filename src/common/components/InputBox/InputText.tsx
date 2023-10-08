import React from "react";
import * as Styles from './styles'

interface inputInfo {
    labelText ?: string,
    inputId ?: string,
    type : string
    changeHandler : (e : React.ChangeEvent<HTMLInputElement>) => void
}

const InputText = ({labelText, type, inputId, changeHandler} : inputInfo) => {
    return (
        <Styles.InputTextWrap>
            <Styles.InputLabel htmlFor={inputId}>{labelText}</Styles.InputLabel>
            <Styles.InputText id={inputId} type={type} onChange={changeHandler}></Styles.InputText>
        </Styles.InputTextWrap>
    )

}

export default InputText