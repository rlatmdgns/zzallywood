import * as Styles from './styles'

interface ButtonProps {
    title: string,
    location: string
}

const Button = ({ title, location }: ButtonProps) => {

    return (
        <Styles.Button>{title}</Styles.Button>
    )
}

export default Button