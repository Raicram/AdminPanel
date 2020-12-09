import React from 'react';
import styled from 'styled-components'
import Link from 'atoms/link/link'


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

interface InavItem {
    text: string;
    url: string;
}

interface InavItems extends InavItem {
    items: Array<InavItem>
}


const NavItems = ({items}: InavItems) => {
    return(
        <Wrapper>
            {items.map((item, key) =>(
                <Link key={key} text={item.text} url={item.url} />
            ))}
        </Wrapper>
    )
}


export default NavItems