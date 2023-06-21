import styled from "styled-components";


export const Button = styled.button`
  display:flex;
`

// flex-wrap:${props => props.location === '' ? 'wrap' : 'nowrap'};

export const ButtonIcon = styled.i`
  width:50px;
  height:50px;
  background:#000;
`


// button의 위치에 따라, TOP BUTTON, LEFT BUTTON