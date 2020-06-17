import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';
import Header from '../components/Header';
import { FadeAnimation } from '../pages/Projects';
export default class Home extends Component {
    render() {
        return (
            <HomeStyle>
            <FadeAnimation>
                <div className="container">
                    <div className="description">
                        <h6>Hi, my name is</h6>
                        <h1><Header /></h1>
                        <h1>I build things on the internet...</h1>
                        <p>I'm an aspiring web developer living in Mountain View, California, specializing in building websites and web applications. </p>
                        <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=aodeh76@gmail.com"><button>Connect</button></a>
                        <div className="border"></div>
                    </div>
                </div>
            </FadeAnimation>
            </HomeStyle>
        )
    }
}



export const HomeStyle = styled.div`
    .container {
        display: flex;
        width: 100%;
        height: 90vh;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    
    .container .description {
        width: 100%;
        color: var(--lightGray);
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .container .description h6 {
        margin-bottom: -1rem;
    }

    .container .description h1 {
        font-weight: 330;
        font-size: 5rem;
    }

    .container .description p {
        font-family: Arial, Helvetica, sans-serif;
        margin-top: 2rem;
        padding: 1rem;
        width: 40%;
        margin: auto;
        letter-spacing: 0.1rem;
    }

    .container .description button {
        text-transform: capitalize;
        font-size: 1.4rem;
        border-radius: 0.5rem;
        border: 1px solid var(--blueMain);
        padding: 1rem 1rem;
        cursor: pointer;
        display: inline-block;
        margin: 0.2rem 0.5rem 1rem 0.5rem;
        transition: all 0.3s ease-in;
        &:hover {
          transition: all 0.3s ease-in;
          background-color: var(--blackMain);
          color: var(--whiteMain);
        }

        &:focus {
            outline: 0;
            transition: all 0.3s ease-out;
        }

        .border {
            border: 1px solid var(--grayMain);
            width: 100%;
        }
        `;
