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

    li {
      width: 60px;
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
      a {
        width: inherit;
        heigth: inherit;
        justify-content: center;
        width: 60px;
        height: 60px;
        align-items: center;
        color: #29435e;

        :hover {
          transition: all 350ms ease-in;
          color: #ffe3a3;
        }
      }
    }
  }
`

const SocialBar = () => (
  <Wrapper>
    <ul>
      <li>
        <a
          href="https://github.com/erza-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/erza-taufik-6a8524123/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/erzataufik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/vladimirerza"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>
      </li>
    </ul>
  </Wrapper>
)

export default SocialBar
