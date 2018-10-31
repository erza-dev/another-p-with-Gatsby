import React from 'react'
import styled from 'styled-components'
import { MapPin } from 'react-feather'

const Container = styled.div`
  margin: 2em 0;
  position: relative;
  float: left;
  left: 4%;
  width: 350px;
  height: 80vh;
  background-color: #353535;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  color: #d4d4aa;
  h2 {
    padding: 1em 0 0 0;
    font-weight: 600;
    font-size: 140%;
    line-height: 2;
    letter-spacing: 2px;
    color: #ffe3a3;
  }
  h3 {
    padding: 0.5em 0;
    font-size: 120%;
    letter-spacing: 1.5px;
  }
  .head-3 {
    padding-top: 0;
    letter-spacing: 1px;
  }
`
const Photo = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #ffffff;
  margin: 3em auto 2em auto;
`
const LocationTag = styled.div`
  display: flex;
  h3 {
    padding-left: 5px;
  }
`

const ProfileCard = () => (
  <Container>
    <Photo />
    <h2>{'Erza Taufik Susetyo'}</h2>
    <h3>{'Front - End Web Developer'}</h3>
    <LocationTag>
      <MapPin />
      <h3 className="head-3">Jakarta - Lampung, Indonesia</h3>
    </LocationTag>
  </Container>
)

export default ProfileCard
