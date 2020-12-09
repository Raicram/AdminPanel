import React from 'react'
import styled from 'styled-components'

const Span = styled.span`
    font-size: 0.5em;
    color: #961b1b;
    font-weight: 300;
`;
interface IError {
    text: string;
}


const Error = ({text}: IError) => {
    return <Span>{text}</Span>
}

export default Error;