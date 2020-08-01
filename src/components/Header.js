import React from 'react'
import styled from 'styled-components';
export default function Header() {
    return (
        <HeaderWrapper>
        <h6 className="greeting">Hello, my name is</h6>
        <h1 className="name">Abdullah Odeh.</h1>
        </HeaderWrapper>
    )
}

export const HeaderWrapper = styled.h1`
    color: var(--lightGray);
    font-weight: 500;
    letter-spacing: 0.1rem;
    padding: 1rem;

    .greeting {
        text-align: left;
        font-size: 1rem;
        margin-left: 3rem;
    }

    .name {
        text-align: left;
        margin-left: 3.5rem;
        font-size: 5rem;
    }

    @media screen and (max-width: 992px) {
        .greeting {
            display: flex;
            font-size: 10px;
            margin: 0;
        }

        .name {
            font-size: 45px;
            margin: 0;
            font-weight: 700;
            color: var(--faded) !important;
            padding: 0.5rem 0.5rem 0 0;
        }
    }
`

