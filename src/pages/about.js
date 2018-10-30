import React from 'react'
import '../components/fonts.css'
import ProfileCard from '../components/profilecard'
import styled from 'styled-components'
import Layout from '../components/layout'

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  min-width: 60%;
  background: #353535;
  position: absolute;
  float: right;
  right: 2%;
  top: 14%;
  line-height: 1.6;
  padding: 2em 2em;
  font-size: 1.2em;
  border-radius: 15px;
  word-wrap: break-word;

  h4 {
    width: 800px;
    font-size: 140%;
    font-weight: 600;
    padding: 0.5em 0;
  }
  p {
    width: 800px;
  }
`

const AboutPage = () => (
  <Layout>
    <ProfileCard />
    <AboutMe>
      <h4>About me</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio modi
        amet ut sequi. Placeat quas est laudantium non, tempore reiciendis
        aliquid voluptatum obcaecati beatae ea fugit asperiores, natus
        cupiditate saepe! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Voluptates accusantium minus laudantium vero sed reiciendis velit
        expedita vel saepe eaque, blanditiis dolore, voluptas sequi voluptatum
        impedit aut error explicabo in? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ex, in! Necessitatibus facere accusantium, corporis
        tempore suscipit ab commodi tenetur aut laborum debitis corrupti ipsum,
        placeat aliquid ipsa illum vel molestias!
      </p>
    </AboutMe>
  </Layout>
)
export default AboutPage
