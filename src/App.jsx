import { useState } from 'react'
import { styled } from 'styled-components'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'


const Container = styled.div`
    // display: grid;
    // grid-template-columns: repeat(2, 1fr);
    padding-top: 50px;

    @media (max-width: 1024px) {
      display: flex;
      align-items: start;
    }
`;


function App() {

  return (
    <>
      <Header />
      <Container>
          <About className="app-about"/>
          <Projects className="app-projects"/>
      </Container>
    </>
  )
}

export default App
