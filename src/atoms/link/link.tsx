import React from 'react';
import styled from 'styled-components';

const A = styled.a`
    text-decoration: none;
    font-size: 0.8em;
    cursor: pointer;
`;

interface ILink {
    text: string;
    url: string;
}

const Link = ({text,url}: ILink) => {
    return <A href={url} target="_blank">{text}</A>
}

export default Link