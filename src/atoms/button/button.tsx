import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    border-radius: 10px;
    border: none;
    background-color: #a545ff;
    color: #d5e3b6;

    &:hover{
        background-color: #4c0191;
    }
`;

interface IButton {
    text: string;
}

const Button = ({text}: IButton) => {
    return <StyledButton>{text}</StyledButton>
}

export default Button