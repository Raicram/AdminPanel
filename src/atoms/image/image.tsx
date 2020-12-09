import React from 'react'
import styled from 'styled-components';

const Img = styled.img`
    width: 100%;
    height: auto;
`

interface Ipicture {
    url: string;
    alt: string;
}

const Image = ({url, alt}: Ipicture) => {
    return <Img src={url} alt={alt} />
}

export default Image