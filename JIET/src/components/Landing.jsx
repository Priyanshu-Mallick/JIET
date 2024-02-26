import React from 'react';
import land1 from '../assets/land1.png';
import { Container } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
export default function Landing() {
  return (
    <Container fluid className='box1' >
        <span id='type'>HARHARYANAS ONE OF  THE </span>
        <span id='type'>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'OLDEST ENGINEERING COLLEGE',
        1000,
        'ADVANCED ENGINEERING COLLEGE',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        
        
      ]}
      wrapper="span"
      speed={50}
      
      repeat={Infinity}
    />
    </span>
    </Container>
  );
}
