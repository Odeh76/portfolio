import React from 'react';
import styled from 'styled-components';
import portrait from '../img/portrait.JPG';
export default function About() {
    return (
        <AboutStyle>
        <section data-aos="fade-up" id="about" className="container">
        <h2>About Me</h2>
        <div className="image"></div>
        <div className="description">
        <h3>Web Developer</h3>
        <p><i>I chose web development because it helps me fulfill:</i></p> 
        <p>1) The desire to create.</p> 
        <p>2) The satisfaction of building useful things.</p> 
        <p>3) The need for constant learning.</p>
        <p>I recently graduated from <i>San Jose State University</i>, with a Bachelor of Science in Business Administration, concentration in Management Information Systems.
        </p>
        <div className="border"></div>
        </div>
        </section>
         
        </AboutStyle>
    )
}


export const AboutStyle = styled.div`
    

    #about {
        width: 100%;
        height: 100vh;
    }

    #about .image {
        background-image: url(${portrait});
        height: 30vh;
        width: 45%;
        margin: auto;
        padding: 1rem;
        background-size: cover;
        background-repeat: no-repeat;
        transition: all 0.4s ease-in-out;
        opacity: 1;
        &:hover {
            cursor: pointer;
            opacity: 0.6;
            transition: all 0.4s ease-in-out;
        }
    }

    #about h2 {
        display: flex;
        text-align: center;
        justify-content: center;
        padding: 1rem;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 0.05rem;
    }

    

    #about .description {
        margin: auto;
        font-family: Arial, Helvetica, sans-serif;
        width: 100%;
        padding: 1rem;
        height: 50vh;
        color: var(--lightGray);
        letter-spacing: 0.1rem;
    }

    #about .description h3 {
        width: 72%;
        padding-left: 0.8rem;
        text-align: center;
        color: var(--blackMain);
        font-family: Arial, Helvetica, sans-serif;
    }

    .description p {
        width: 45%;
        margin: auto;
        text-align: left;
        padding: 0.7rem;
        letter-spacing: 0.09rem;
    }

    .border {
        border: 1px solid var(--lightGray);
        margin: auto;
        width: 100%;
    }

  
   
`