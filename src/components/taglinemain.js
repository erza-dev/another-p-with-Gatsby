import React from 'react'
import './fonts.css'

import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 2em;
  width: 100%;
  height: 80vh;
  z-index: -5;
  color: white;
  box-sizing: border-box;
`
const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  max-width: 60vw;
  flex-flow: wrap;
  word-break: unset;
  justify-content: start;
`

const TagHeading = styled.h3`
  font-weight: 700;
  font-size: 2.1rem;
  min-width :40%
  justify-self: center;
  letter-spacing: 3px;
  margin-bottom: 0;
`
const DescriptionTag = styled.h4`
  align-self: center;
  padding-left: 1.2em;
  min-width: 40%;
  font-size: 1.3em;
`

const ShowCase = styled.div`
  position: absolute;
  display: block;
  width: 70%;
  height: 70%;
  max-height: 1080px;
  max-width: 1920px;
  background: #ffffff;
  top: 25%;
  left: 25%;
  z-index: -4;
  box-shadow: 4px 4px 13px 3px #000000db;
`
const TriangleShape = styled.div`
  position: absolute;
  display: block;
  top: 15%;
  left: 13%;
  z-index: -10;
  width: 400px;
  height: 400px;
  background-color: #29435e;
  clip-path: polygon(
    0% 0%,
    50% 100%,
    54% 81%,
    20% 12%,
    80% 12%,
    45% 80%,
    50% 100%,
    100% 0%
  );
`

const TaglineMain = () => (
  <Wrapper>
    <TriangleShape />
    <InnerWrapper>
      <TagHeading>Erza Taufik</TagHeading>
      <DescriptionTag>//Web Developer, Front-End</DescriptionTag>
    </InnerWrapper>
    <ShowCase />
  </Wrapper>
)

export default TaglineMain
