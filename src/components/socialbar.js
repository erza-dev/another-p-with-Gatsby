import React from 'react'
import styled from 'styled-components'
import { Twitter, Facebook, GitHub, Linkedin } from 'react-feather'

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  font-size: 3rem;
  float: right;
  right: 0;
  top: 25%;
  z-index: 5;
  align-items: center;

  ul {
    padding: 0.5em;
    a {
      justify-content: center;
      align-items: center;
      color: #29435e;

      :hover {
        transition: all 350ms ease-in;
        color: #ffe3a3;
      }
    }
    li {
      min-width: 60px;
      height: 60px;
      text-align: center;
      border: 2px solid #29435e;
      border-radius: 50%;
      align-items: center;
      margin-block-end: 10px;

      :hover {
        transition: all 320ms ease-in;
        border: 2px solid #ffe3a3;
      }
    }
  }
`

const SocialBar = () => (
  <Wrapper>
    <ul>
      <a href="https://github.com/erza-dev/" rel="noopener" target="_blank">
        <li>
          <GitHub />
        </li>
      </a>

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
