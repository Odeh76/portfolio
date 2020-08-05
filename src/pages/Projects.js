import React from 'react';
import styled, {keyframes} from 'styled-components';
import {css} from 'styled-components'
import test1 from '../img/test1.jpg';
import ecommerce from '../img/ecommerce.png';
import {bounce} from 'react-animations';
export default function Projects(props) {
    console.log(props)
    return (
        
        <ProjectsStyle>
        <section id="projects"data-aos="fade-right">
            <h6>Things I'm building...</h6>
            <FadeAnimation>
                <ul className="projects-grid">
                    <li className="image"></li>
                    <li className="image"></li>
                    <li className="image"></li>
                    <li className="image"></li>
                    <li className="image"></li>
                    <li className="image"></li>
                </ul>
                </FadeAnimation>
        </section>
        </ProjectsStyle>
    )
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
       margin-bottom: 1rem;
        
    }

    section h6 {
    color: var(--lightGray);
    font-weight: 500;
    font-family: Arial, Helvetica, sans serif;
    padding: 1rem;
    letter-spacing: 0.1rem;
    text-align: center;
    font-size: 1.5rem;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 100vh;
        width: 93%;
        grid-gap: 2rem;
        padding: 2rem;
        margin: auto;
        
    }

    ul li {
        align-items: center;
        text-align: center;
        justify-content: center;
    }

    ul li:nth-child(1) {
        background-image: url(${ecommerce});
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

    @media screen and (max-width: 500px) {
        #projects {
            width: 100%;
        height: 220vh;
        }

         ul {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            height: 100vh;
            width: 93%;
            grid-gap: 2rem;
            padding: 2rem;
            margin: auto;
        }

        .image {
        height: 250px;
        background-image: url(${test1});
        background-size: cover;
        background-repeat: no-repeat;
        transition: all ease-out 0.4s;
        }


    }
    
      @media screen and (max-width: 768px) {
        .image {
            display: grid;
            grid-template-columns: repeat (1, 1fr);
        }
      }
    
      @media screen and (min-width: 1171px) {
        .image {
            display: grid;
            grid-template-columns: repeat (1, 1fr);
        }
      }

    
`
// const bounceAnimation = keyframes`${bounce}`;

// const BouncyGrid = styled.section`
//     animation: 1s ${bounceAnimation};
// `

