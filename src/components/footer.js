import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding-bottom: 0.5em;
  padding-right: 2%;
  h3 {
    position: relative;
    text-align: right;
    font-weight: 400;
    font-size: 120%;
  }
`

const Footer = () => (
  <Container>
    <h3>
      Design by
      <Link
        to="/about/"
        style={{
          textDecoration: 'none',
          fontWeight: 600,
          color: 'inherit',
        }}
      >
        {' Erza Taufik'}
      </Link>
      {'. '}
      Powered by Gatsby & React
    </h3>
  </Container>
)

export default Footer
