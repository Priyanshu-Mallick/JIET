import React from 'react'
import Landing from '../components/Landing'
import { Container } from 'react-bootstrap'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
export default function Home() {
  return (
    <Container fluid style={{position:"relative"}}  >
      <div className='floatbox py-3'>
      <FaFacebookSquare style={{fontSize:"2rem",color:"#021f63"}} />
      <FaSquareXTwitter style={{fontSize:"2rem",color:"#021f63"}} />
      <FaSquareInstagram style={{fontSize:"2rem",color:"#021f63"}}/>
      <FaSquareYoutube style={{fontSize:"2rem",color:"#021f63"}}/>
      </div>
    <Landing />
    </Container>
    
  )
}
