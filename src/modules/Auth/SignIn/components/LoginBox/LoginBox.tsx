import React from "react";
import InputText from "@/common/components/InputBox/InputText";
import * as Styles from './styles'

const LoginBox = () => {
    const inputChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) : void => {
        console.log(e.target.value)
    }

    const passwordChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) : void => {
        console.log(e.target.value)
    }

    return (
        <Styles.LoginBox>
            <InputText type="text" changeHandler={inputChangeHandler}/>
            <InputText type="password" changeHandler={passwordChangeHandler}/>
            <Styles.LoginButton>테스트</Styles.LoginButton>
        </Styles.LoginBox>
    )
}

export default LoginBox;