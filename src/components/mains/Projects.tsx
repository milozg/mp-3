import styled from "styled-components";
import { StyledMain } from "../styled_components/StyledMain";
import blackboard from "../../blackboard.jpg"
import { useState } from "react";
import Addition from "../../hooks/addition";
import Subtraction from "../../hooks/subtraction";
import Multiplication from "../../hooks/multiplication";
import Division from "../../hooks/division";
import Power from "../../hooks/power";

const ProjectsHeader = styled.h2`
    height: 15vh;
    background-color: #f4f1de;
    color: #3d405b;
    font-size: calc(6vw + 4px);
    font-family: "League Gothic", sans-serif;
    font-weight: 400;
    font-variation-settings: "wdth" 100;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CalcFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5vh;
    font-size: calc(2vw + 3px);
    font-family: "PT Serif", serif;
    font-weight: 400;
    color: #3d405b;
`;

const StyledLabel = styled.label`
    background-color: #f4f1de;
    border: hidden;
    border-radius: 8px;
    padding: 2vh 2vw;
`;

const StyledInput = styled.input`
    width: 40vw;
    height: 8vw;
    margin: 3vh auto;
    border: 0.5vw solid #3d405b;
    text-align: center;
    font-size: calc(3vw + 4px);
    color: #e07a5f;
    font-family: "League Gothic", sans-serif;
    font-weight: 400;
    font-variation-settings: "wdth" 100;
`;

const StyledButton = styled.button`
    background-color: #e07a5f;
    text-align: center;
    text-decoration: none;
    font-size: calc(3vw + 4px);
    font-family: "PT Serif", serif;
    font-weight: 400;
    border-radius: 50%;
`;

const StyledOutput = styled.h2`
    margin-top: 5vh;
    font-size: calc(6vw + 4px);
    font-family: "League Gothic", sans-serif;
    font-weight: 400;
    font-variation-settings: "wdth" 100;
`;

export default function Projects(){
    const [numOne, setNumOne] = useState(0);
    const [numTwo, setNumTwo] = useState(0);
    const [output, setOutput] = useState('');


    return (
        <StyledMain style={{paddingTop : 0, backgroundImage : `url(${blackboard})`}}>
            <ProjectsHeader>MEGA Calculator</ProjectsHeader>
            <CalcFlex>
                <StyledLabel>First Number:</StyledLabel>
                <StyledInput type="text" onChange={(e) => setNumOne(Number(e.target.value))}/>
                <StyledLabel>Second Number:</StyledLabel>
                <StyledInput type="text" onChange={(e) => setNumTwo(Number(e.target.value))}/>
                <div>
                    <StyledButton onClick={() => setOutput(Addition(numOne,numTwo))}>+</StyledButton>
                    <StyledButton onClick={() => setOutput(Subtraction(numOne,numTwo))}>-</StyledButton>
                    <StyledButton onClick={() => setOutput(Multiplication(numOne,numTwo))}>*</StyledButton>
                    <StyledButton onClick={() => setOutput(Division(numOne,numTwo))}>/</StyledButton>
                    <StyledButton onClick={() => setOutput(Power(numOne,numTwo))}>**</StyledButton>
                    <StyledButton>Clear</StyledButton>
                </div>
                <StyledOutput style={Number(output)<0 ? {color : "red"} : {color : "black"}}>
                    {output}
                </StyledOutput>
            </CalcFlex>
        </StyledMain>
    );
}
