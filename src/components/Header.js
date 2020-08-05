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

    // IPhone 6/7/8

    @media screen and (min-width: 375px) and (max-width: 667px) {
        .greeting {
            display: flex;
            font-size: 14px;
            margin: 0 0 0 1rem;
        }

        .name {
        font-size: 45px;
        margin: 0 0 0 -1rem !important;
        font-weight: 700;
        color: var(--faded) !important;
        padding: 0.5rem 0.5rem 0 0;        
    }

    .build {
        position: relative;
        padding: 0;
        margin: 0;
    }

    .aspire {
        display: flex;
        width: 100%;
        text-align: left;
    }
}

// IPad

@media screen and (min-width: 768px) and (max-width: 1024px) {
    .greeting {
        font-size: 26px;
    }
    
    .name {
        font-size: 8rem;
        color: var(--faded)
    }
}

// IPad Pro

@media screen and (min-width: 1024px) and (max-width: 1366px) {
    .greeting {
        font-size: 4rem;
    }

    .name {
        font-size: 10rem;
    }
}

// Laptop

@media screen and (min-width: 1200px) and (max-width: 1440px) {
    
    .greeting {
        font-size: 1rem;
    }
    
    .name {
        font-size: 5rem;
        color: var(--faded);
    }
}


// Small Phones 

@media screen and (min-width: 320px) and (max-width: 640px) {
    .greeting {
        font-size: 18px;
        display: flex;
        text-align: left;
        position: relative;
        right: 22%;
        margin: 0 0 0 1.5rem;
    }

    .name {
        display: flex;
        font-size: 50px;
        width: 100%;
        text-align: left;
        margin-left: -0.45rem;
        color: var(--faded);
    }



}

   
`

 // @media screen and (max-width: 992px) {
    //     .greeting {
    //         display: flex;
    //         font-size: 10px;
    //         margin: 0;
    //     }

    //     .name {
    //         font-size: 45px;
    //         margin: 0;
    //         font-weight: 700;
    //         color: var(--faded) !important;
    //         padding: 0.5rem 0.5rem 0 0;
    //     }
    // }

