import React from 'react'
import styled from 'styled-components'

const CenterWrapper = styled.div`
    margin: 0px auto;
    width: 100%;
    max-width: 900px;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

const HeyWrapper = styled.h5`
    font-size: 25.5px;
    color: #EF9D10;
    font-weight: normal;

    @media (max-width: 375px) {
        font-size: 20px;
    }
`

const Name = styled.h1`
    font-size: 70px;
    font-weight: bold;
    color: white;

    & span {
        color: orange;
    }

    @media (max-width: 1000px) {
        font-size: 60px;
    }

    @media (max-width: 768px) {
        font-size: 50px;
    }

    @media (max-width: 638px) {
        font-size: 7.2vw;
    }

    @media (max-width: 495px) {
        font-size: 40px;
    }

    @media (max-width: 375px) {
        font-size: 40px;
        margin: .5rem 0;
    }

    @media (max-width: 300px) {
        font-size: 34px;
    }


    
`

const AboutDesc = styled.p`
    color: #6B7B8C;
    font-size: 1.5rem;
    font-weight: bold;
    width: 65%;
    padding: 0 0 2.8rem 0;

    @media (max-width: 768px) {
        font-size: 1.2rem;
        width: 70%;
    }

    @media (max-width: 375px) {
        font-size: 1.1rem;
        width: 80%;
    }
`

const ContactButton = styled.a`
    padding: 10px 13px;
    border: 1px solid #EF9D10;
    border-radius: 5px;
    color: orange;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.3rem;

    &:hover {
        background-color: #EF9D10;
        color: white;
    }

    @media (max-width: 375px) {
        font-size: 1rem;
    }


`

const Intro: React.FC = () => {
    return (
        <CenterWrapper className="animate__animated animate__fadeInDown">
            <div style={{marginLeft: "2rem"}}>
            <HeyWrapper>Hey!</HeyWrapper>
            <Name>I'm <span>Sam</span><span style={{display: "inline-block",animation: "bounce-top 1s ease-in-out both"}} >🙂</span></Name>
            <AboutDesc>Software Developer who enjoys making impactful projects on the web, mobile and in real-life.</AboutDesc>
            <ContactButton href="#contact">Contact Me</ContactButton>
            </div>
        </CenterWrapper>
    )
}
export default Intro
