import React from 'react';
import styled from 'styled-components';
import portrait from '../img/portrait.JPG';
import {FaGithub, FaFacebook, FaLinkedinIn, FaEnvelope, FaAngleRight} from 'react-icons/fa';
import { css } from 'styled-components';

export default function About() {
    return (
        <AboutStyle>
    <div id="about">
    <br />
    <h1 className="about-me">About Me</h1>
    <section className="container" data-aos="fade-up">

        <div className="description-about" >
            <p><i>I chose web development because it helps fulfill:</i></p> 
                <ol>
                    <li>The desire to create </li>
                    <li>The need for constant learning</li>
                    <li>The satisfaction of building useful things</li>
                </ol>
                <br />
            <p> I enjoy building websites, applications with intuitive user interface and providing seamless user experience.
            </p>
            <br />
            {/* Web development allows me to satiate my love for learning and provides me with a creative outlet. */}
            {/* <p>I am a persistent hard worker and will not give up on a project until the customer and myself are satisfied. I love finding innovative and creative solutions to problems. I am a people’s person. I love to socialize, get to know my co-workers and make sure that everyone feels welcomed and appreciated.</p> */}
            {/* <p>After moving to the US from Jordan, I graduated with a degree in Management Information Systems from <i>San Jose State University</i>. I am currently interested in opportunities related to web development.</p> */}
                <p>
                I am always looking to learn new technologies, and find creative, efficient ways to solve problems. 
                    </p> 
                    <br />
                <p>
                Current tech stack:
                </p>
                <ul className="tech-stack">
                    <li><FaAngleRight size={12} />HTML5</li>
                    <li><FaAngleRight size={12} />CSS3</li>
                    <li><FaAngleRight size={12} />JavaScript (ES6+)</li>
                    <li><FaAngleRight size={12} />React</li>
                    <li><FaAngleRight size={12} />Node.js</li>
                    <li><FaAngleRight size={12} />Styled components</li>
                </ul>
        </div>
    <img className="portrait" src={portrait} alt="portrait of Abdullah"/>
    
      
        </section>
        <div className="icons" data-aos="fade-right">
                    <br />
                    <a target="_blank" href="http://www.github.com/Odeh76"><FaGithub size={25} /></a>
                    <br />
                    <a target="_blank" href="https://www.linkedin.com/in/abdullah-odeh"><FaLinkedinIn size={25} /></a>
                    <br />
                    <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=aodeh76@gmail.com"><FaEnvelope size={25} /></a>
                    <br />
                    <a target="_blank" href="http://www.facebook.com/odeh76"><FaFacebook  size={25} /></a>
            </div>
        
    </div>
         </AboutStyle>
    )
}





export const AboutStyle = styled.section`
    

    #about {
        font-family: Arial, Helvetica, sans-serif;
        color: var(--lightGray);
    }

    .about-me {
        margin-left: 3.5rem;
    }

    .container {
        display: flex;
        width: 100%;
        height: 100vh;
        margin-left: 3rem;
        padding: 1rem;
    }

    .icons {
        position: fixed;
        display: flex;
        flex-direction: column;
        height: 100%;
        top: 0;
        overflow-x: hidden;
        justify-content: space-evenly;
    }

    .icons a {
        padding: 0.5rem;
        opacity: 0.7;
        color: var(--lightGray);
        &:hover {
            opacity: 1;
            color: var(--lightGray);
        }
    }


    h3 {
        font-family: Arial, helvetica, sans-serif;
        font-weight: 400;
        font-size: 1.5rem;
        text-transform: uppercase;
        margin: 1rem 1rem 2rem 0;
        color: var(--lightGray);
        
    }

    .description-about {
        width: 40%;
        height: 50vh;
        font-weight: 400;
        font-size: 1.2rem;
        text-align: justify;
        padding: 0.2rem;
        margin-left: 1.5rem;
        font-family: Arial, Helvetica, sans-serif;
    }

    .description-about li:nth-child(1,2,3) {
        letter-spacing: 0.07rem;
        font-weight: 100;
    }

    .description-about ol {
        margin: 1rem 0 0 1rem;
        padding: 1rem;
        color: var(--lightGray);
        font-weight: 200;
        line-height: 2rem;
        font-family: Arial, Helvetica, sans-serif;
    }

    .description-about p {
        color: var(--lightGray);
        font-family: Arial, Helvetica, sans-serif;
    }

    img {
        height: 45vh;
        width: 35%;
        background-size: cover no repeat;
        background-position: center;
        transition: all 0.4s ease-in;
        border-radius: 10%;
        padding: 1rem;
        position: relative;
        left: 10%;
    }

    img:hover {
        opacity: 0.5;
        cursor: pointer;
        transition: all 0.4s ease-in;
    }

    .tech-stack {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0.5rem;
        list-style: none;
        letter-spacing: 0.09rem;
        line-height: 2rem;
    }

    @media screen and (max-width: 992px) {
        .icons {
            display: none;
        }

        .about-me {
            text-align: center;
            justify-content: center;
            margin: auto;
        }

        .description-about {
            display: grid;
            width: 100%;
            grid-template-columns: repeat (1, 1fr);
            padding: 0;
            word-spacing: 1px;
        }

      
    }

`