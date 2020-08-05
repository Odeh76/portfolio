import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';
import Header from '../components/Header';
import { FadeAnimation } from '../pages/Projects';
export default class Home extends Component {
    render() {
        return (
            <HomeStyle >
                <div className="container" data-aos="fade-zoom-in" data-aos-duration="2000" data-aos-delay="900" >
                    <div className="description-home" >
                        <Header />
                        <h1 className="build">I build things on the internet. . .</h1>
                        <p className="aspire">I'm an aspiring web developer living in Mountain View, California, specializing in building websites and web applications. </p>
                        <Router>
                        <Link to="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=aodeh76@gmail.com"><Button>Connect</Button></Link>
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

    // Small phones 
    
    @media screen and (min-width: 320px) and (max-width: 640px) {
        .container {
            width: 100%;
            height: 100vh;
            letter-spacing: 0.1rem;
        }

        .container .description-home .build {
            font-size: 30px;
            width: 100%;
            margin: 0 0 0 1rem;
        }

        .container .description-home .aspire {
            width: 100%;
            margin: auto;
            width: 100%;
            font-size: 16px;
            text-align: left;
        }
    }

    

    // IPhone 6/7/8

    @media screen and (min-width: 375px) and (max-width: 667px) {
        .container {
                width: 100%;
                display: flex;
                height: 100vh;
    }

    .container .description-home .build {
                font-size: 30px;
                width: 100%;
                margin: 0 0 0 -0.5rem;
                padding: 0.5rem;
            }
    
            .container .description-home .aspire {
                width: 100%;
                margin-left: -1rem;
            }
}

    // IPad 

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        .container {
            width: 100%;
            height: 100vh;
            margin: 0;
        }

        .description-home {
            width: 100%;
            color: var(--lightGray);
            text-align: left;
            margin-left: 3rem;
            align-items: center;
            justify-content: center;
            font-size: 20px;
        }

        .description-home .aspire {
            font-size: 25px;
            width: 75% !important;
        }
        

        
    }

    // IPad Pro

@media screen and (min-width: 1024px) and (max-width: 1366px) {
    .build {
        font-size: 4rem;
        letter-spacing: 0.1rem;
    }

    .description-home .aspire {
        font-size: 2rem;
    }
}

    // Laptop

@media screen and (min-width: 1200px) and (max-width: 1440px) {
    .container {
        width: 100%;
        height: 100vh;
        margin: 0;
    }

    .container .description-home .build {
        font-size: 4rem;
        width: 100%;
    }

    .container .description-home .aspire {
        width: 50%;
        font-size: 1.5rem;
    }
}
        
`;

 // @media screen and (max-width: 500px) {
    //     background-color: black;
    //   }
    
    //   @media screen and (max-width: 768px) {
    //     background-color: red;
    //   }   
    //     @media screen and (min-width: 769px) and (max-width: 1170px) {
    //     background-color: yellow;
    //   }
    
    //   @media screen and (min-width: 1171px) {
    //     background-color: orange;
    //   }

    // @media screen and (max-width: 992px) {
    //     .container {
    //         display: flex;
    //         justify-content: center;
    //         align-items: center;
    //         text-align: center;
    //         margin-left: 1rem;
    //     }

    //     .container .description-home .build {
    //         font-size: 35px;
    //         margin: 0;
    //         padding: 0.5rem;
    //     }

    //     .container .description-home .aspire {
    //         width: 80%;
    //         margin: 0;
    //         padding: 0.5rem;
    //     }
    // }

const Button = styled.button`
font-size: 1.7rem;
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

// IPad Pro

@media screen and (min-width: 1024px) and (max-width: 1366px) {
    font-size: 2.5rem;
}

// Small phones

@media screen only and (min-width: 320px) and (max-width: 640px) {
    margin: auto;
    width: 100%;
}



`
