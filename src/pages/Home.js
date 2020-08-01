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
                <div className="container">
                    <div className="description-home">
                        <Header />
                        <h1 className="build">I build things on the internet. . .</h1>
                        <p className="aspire">I'm an aspiring web developer living in Mountain View, California, specializing in building websites and web applications. </p>
                        <Router>
                        <Link target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=aodeh76@gmail.com"><Button>Connect</Button></Link>
                        </Router>
                    </div>
                </div>
            </HomeStyle>
        )
    }
}



export const HomeStyle = styled.div`
    .container {
        display: flex;
        width: 100%;
        height: 100vh;
        text-align: center;
        align-items: center;
    }
    
    .container .description-home {
        width: 100%;
        color: var(--lightGray);
        text-align: left;
        margin-left: 3rem;
        align-items: center;
        justify-content: center;
    }

    .container .description-home .aspire {
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        margin: 2rem 0 0 3.4rem;
        width: 35%;
        letter-spacing: 0.08rem;
    
    }

    .container .description-home .build {
        margin: 1rem 0 -0.5rem 4.5rem;
        color: var(--lightGray);

    }

    @media screen and (max-width: 992px) {
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-left: 1rem;
        }

        .container .description-home .build {
            font-size: 35px;
            margin: 0;
            padding: 0.5rem;
        }

        .container .description-home .aspire {
            width: 80%;
            margin: 0;
            padding: 0.5rem;
        }
    }

   

        
`;

 // @media screen and (max-width: 500px) {
    //     background-color: black;
    //   }
    
    //   @media screen and (max-width: 768px) {
    //     background-color: red;
    
    //     @media screen and (min-width: 769px) and (max-width: 1170px) {
    //     background-color: yellow;
    //   }
    
    //   @media screen and (min-width: 1171px) {
    //     background-color: orange;
    //   }

const Button = styled.button`
font-size: 1.4rem;
border-radius: 0.5rem;
border: 1px solid var(--blueMain);
padding: 1rem 1rem;
cursor: pointer;
display: inline-block;
margin: 0.2rem 0.5rem 1rem 4.3rem;
transition: all 0.3s ease-in;
color: var(--lightGray);
letter-spacing: 0.1rem;
&:hover {
  transition: all 0.3s ease-in;
  background-color: var(--lightGray);
  color: var(--navyBlue);
  font-style: italic;
}

@media screen and (max-width: 992px) {
    display: inline-block;
    justify-content: center;
    margin: 1rem 0 0 0.4rem;
}
`
