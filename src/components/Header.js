import React from 'react'
import styled from 'styled-components';
export default function Header() {
    return (
        <HeaderWrapper>
        <h1>Abdullah Odeh</h1>
        </HeaderWrapper>
    )
}

export const HeaderWrapper = styled.h1`
    color: var(--lightGray);
    font-weight: 500;
    font-family: Arial, Helvetica, sans serif;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    padding: 1rem;
    margin-top: 1rem;
    margin-left: -1.2rem;
    margin-bottom: -1rem;
    
`

