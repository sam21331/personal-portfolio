import React from 'react'
import styled from 'styled-components'

const AboutWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${props => props.theme.spacing.lgbetween};
    width: 60%;
    max-width: 900px;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
    min-width: 700px;

    @media (max-width: 716px) {
        flex-direction: column;
        min-width: 100%;
        margin-top: 13vh;



    
    }

  
`

const LeftSide = styled.div`
    width: 60%;

    @media (max-width: 750px) {
        width: 100%;
        padding: 0 1rem;
    }
`

// const RightImage = styled.img`
//     margin: 3rem 2rem;
//     min-width: 210px;

//     @media(max-width: 700px) {
//        margin-top: 3rem;
//     }


//     @media(max-width: 490px) {
//         width: 40%;
//         min-width: 190px;
//     }


 
// `

const AboutName = styled.h3`
    color: white;
    display: flex;
    font-size: 2.3rem;
    & sup {
        color: orange;
        font-weight: normal;
        margin: 0 .5rem;
        font-size: 1.2rem;
    }

    @media (max-width: 500px) {
        font-size: 1.6rem;
    }

`

const ContentWrapper = styled.p`
    color: white;
    margin: 1rem 0;
    font-weight: 100;
    font-size: 1.1rem;

    @media (max-width: 500px) {
        font-size: 1rem;
    }
    
`

const ToolBoxText = styled.h5`
    color: white; 
    margin: .5rem 0;
    font-weight: bolder;
    font-size: 1.3rem;

    @media (max-width: 500px) {
        font-size: 1.2rem;
    }
`

const ToolBox = styled.div`
    display: flex;
    font-size: 1rem;

    @media (max-width: 364px) {
        font-size: .9rem;
        flex-direction: column;
    }

    ul {
        margin: 0 .5rem;
        color: white
    }

    ul li {
        list-style: none;
    }

    ul li::before {
        content: "▹";
        color: orange;
        margin: 0 .5rem;

    }
`



const About: React.FC = () => {
    return (
        <AboutWrapper id="about">
            <LeftSide>
                <AboutName>
                    <sup>01.</sup> About Me
                </AboutName>

                <ContentWrapper>
                Hey! I'm <span onClick={() => window.location.href="#"} style={{color: "orange", cursor: "pointer"}}>Sam</span>, a software developer. I focus on building interactive UI's on the web, mobile,   and desktop. I've been building websites since 2017 with a focus on responsive design, accessibility and pleasing aesthetics.
                </ContentWrapper>
                <ToolBoxText>
                    Daily Tech:             </ToolBoxText>
                <ToolBox>
                <ul>
                    <li>Javascript (ES6).</li>
                    <li>Node.js.</li>
                    <li>CSS (Tailwind, SCSS).</li>
                </ul>
                <ul>
                    <li>React.</li>
                    <li>React-Native.</li>
                    <li>Typescript.</li>
                    <li>GraphQL.</li>
                </ul>
                </ToolBox>
            </LeftSide>
        </AboutWrapper>
    )
}

export default About
