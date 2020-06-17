import React from 'react';
import styled, {keyframes} from 'styled-components';
import test1 from '../img/test1.jpg';
import {bounce} from 'react-animations';
export default function Projects(props) {
    console.log(props)
    return (
        
        <ProjectsStyle>
        <section id="projects"data-aos="fade-right">
            <h6>Things I'm building...</h6>
            <div className="projects-container">
            <FadeAnimation>
                <ul>
                    <li className="image"></li>
                    <li className="image"></li>
                    <li className="image"></li>
                    <li className="image"></li>
                    <li className="image"></li>
                    <li className="image"></li>
                </ul>
                </FadeAnimation>
                <div className="border"></div>
            </div>
        </section>
        </ProjectsStyle>
    )
}

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
}

export const fade = keyframes`

    0% {
        opacity: 0;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

export const FadeAnimation = styled.section`
    animation: ${fade} 2.5s ease-in-out;
`

export const fadeNav = keyframes`
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0.9;
    }

    100% {
        opacity: 1;
    }
`

export const FadeAnimationNav = styled.section`
    animation: ${fadeNav} 2s ease-in;
`





export const ProjectsStyle = styled.section`

    #projects {
        width: 100%;
        height: 100vh;

        
    }

    section h6 {
    color: var(--blackMain);
    font-weight: 500;
    font-family: Arial, Helvetica, sans serif;
    padding: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    text-align: center;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 90vh;
        width: 93%;
        grid-gap: 2rem;
        padding: 2rem;
        margin: auto;

        
    }

    ul li {
        align-items: center;
        text-align: center;
        justify-content: center;
        list-style: none;
        background-color: var(--lightBlue);
    }

    .image {
        background-image: url(${test1});
        background-size: cover;
        background-repeat: no-repeat;
        transition: all ease-out 0.4s;
    }

    .image:hover {
        cursor: pointer;
        opacity: 0.5;
    }

    .border {
        border: 1px solid var(--grayMain);
        width: 88%;
        margin: auto;
    }

    @media ${device.mobileL} {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        background-size: cover;
        background-repeat: no-repeat;
    }

    
`
// const bounceAnimation = keyframes`${bounce}`;

// const BouncyGrid = styled.section`
//     animation: 1s ${bounceAnimation};
// `

