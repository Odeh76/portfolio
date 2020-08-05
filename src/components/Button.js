import styled from 'styled-components';


export const Button = styled.button`
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


`