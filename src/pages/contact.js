import React from 'react'
import '../components/fonts.css'
import styled from 'styled-components'
import Layout from '../components/layout'
import SocialBar from '../components/socialbar'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  .items {
    min-width: 400px;
    padding: 1em 0;
    border: 4px solid #353535;
    border-radius: 15px;
    margin: 2em 0;
  }
  .contents {
    padding-top: 20px;
    font-size: 110%;
  }
  h2 {
    font-size: 120%;
    font-weight: 400;
    color: #ffe3a3;
  }
`

const ContactPage = () => (
  <Layout>
    <Wrapper>
      <div className="items">
        <h2>Email</h2>
        <div className="contents">erzastaufik@gmail.com</div>
      </div>
      <div className="items">
        <h2>Phone</h2>
        <div className="contents">082281999936</div>
      </div>
      <div className="items">
        <h2>{'or Just poke me on Social Media'}</h2>
      </div>
    </Wrapper>
    <SocialBar />
  </Layout>
)

export default ContactPage
