import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  top: 60%;
  left: 0;
  display: flex;
  width: fit-content;
  flex-direction: column;
`
const MainLink = styled(Link)`
  text-decoration: none;
  margin: 1.5rem;
  font-size: 2rem;
  width: inherit;
  color: #d4d4aa99;

  :hover {
    color: #d4d4aa;
  }

  :after {
    display: block;
    content: '';
    background-color: #353535;
    height: 2px;
    bottom: calc(50% - 1.5px);
    width: 0;
  }
  :hover:after {
    width: 100%;
    transition: all 0.4s ease;
  }
`

const NavBar = () => (
  <Wrapper>
    <MainLink to="/page-2/">Profile</MainLink>
    <MainLink to="/">Contact</MainLink>
    <MainLink to="/">Home</MainLink>
  </Wrapper>
)

export default NavBar
