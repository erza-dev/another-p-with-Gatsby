import React from 'react'
import styled from 'styled-components'
import { Twitter, Facebook, GitHub, Linkedin } from 'react-feather'

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  background: #ffffff;
  font-size: 3rem;
  float: right;
  right: 0;
  top: 25%;
  z-index: 5;
  align-items: center;

  ul {
    padding: 0.5em;

    li {
      background: #353535;
      min-width: 50px;
      text-align: center;
      border-radius: 50%;
      align-items: center;
    }
  }
`

const SocialBar = () => (
  <Wrapper>
    <ul>
      <li>
        <GitHub />
      </li>
      <li>
        <Linkedin />
      </li>
      <li>
        <Twitter />
      </li>
      <li>
        <Facebook />
      </li>
    </ul>
  </Wrapper>
)

export default SocialBar
