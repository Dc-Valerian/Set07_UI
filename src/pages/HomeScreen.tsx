import React from 'react'
import Home from './Home'
import Little from './Little'
import styled from 'styled-components'
import img1 from "../assets/briefcase.svg"
import img2 from "../assets/camera.svg"
import img3 from "../assets/cast.svg"
import img4 from "../assets/check-point.svg"
import img5 from "../assets/heart.svg"
import img6 from "../assets/crd-view.svg"
import img7 from "../assets/pantone.svg"
import img8 from "../assets/volume-up.svg"
import Third from './Third'
import Fourth from './Fourth'
import Fifth from './Fifth'
import Sixth from './Sixth'
import Seventh from './Seventh'
import Eight from './Eight'
import GlobalButton from '../components/reUse/GlobalButton'

const HomeScreen = () => {
  return (
    <div>
      
      <Home />
        <Container>
        <Main>
        <Tholder>
            <Title>Choice favourite course from top category</Title>
            <GlobalButton text='see All Categories' width='150px'/>
            </Tholder>
        <CardHolder>
          <Little 
          title='Design'
          text='Make i do make we dey go house. i don tire'
          image={img2}
          />
        </CardHolder>
        </Main>
        </Container>
        <Third />
        <Fourth />
        <Fifth />
        <Sixth />
        <Seventh />
        <Eight />
    </div>
  )
}

export default HomeScreen


const Title = styled.div`
font-size: 35px;
`
const Tholder = styled.div`
display: flex;
justify-content: space-between;
margin-top: 70px;
margin-bottom: 40px;
`
const CardHolder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  padding-bottom: 100px;
`

const Main = styled.div`
display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`