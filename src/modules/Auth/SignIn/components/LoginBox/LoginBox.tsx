import { useRef } from "react";
import { LOGIN_ID_VALID } from '@/constants/define'
import InputForm from "@/common/components/InputBox/InputForm";
import * as Styles from './styles'

interface loginFormInterface {
  userId : string | undefined
  userPw : string | undefined
}

const LoginBox = () => {
  

    const loginForm = useRef<loginFormInterface>({
      userId : '',
      userPw : ''
    })

    const inputChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) : void => {
      loginForm.current.userId = e.target.value
      if(!LOGIN_ID_VALID.test(loginForm.current.userId)){
        console.log('아이디 형식이 잘못 되었습니다.')
      }
    }

    const passwordChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) : void => {
      loginForm.current.userPw = e.target.value
    }

    const loginHandler = () => {
      if(!loginForm.current.userId || !loginForm.current.userPw){
        alert('입력 안됐습니다.')
        return
      }

      
    }

    return (
        <Styles.LoginBox>
            <InputForm type="text" placeholder="아이디 입력" errMsg="아이디의 입력값이 올바르지 않습니다." valid={true} changeHandler={inputChangeHandler}/>
            <InputForm type="password" placeholder="암호 입력" changeHandler={passwordChangeHandler}/>
            <Styles.LoginButton onClick={loginHandler}>로그인</Styles.LoginButton>
        </Styles.LoginBox>
    )
}

export default LoginBox;