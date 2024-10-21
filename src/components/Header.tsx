import styled from "styled-components";

const HeaderParent = styled.header`
    background-color: #3d405b;
    color: #f4f1de;
    padding: 1% 1%;
`;

const Name = styled.h1`
    font-family: "League Gothic", sans-serif;
    font-weight: 400;
    font-variation-settings: "wdth" 100;
`;

const Subtitle = styled.p`
    font-family: "PT Serif", serif;
    font-weight: 400;
`

export default function Header(){
    return (
        <HeaderParent>
            <Name>Milo Zurn-Galinsky</Name>
            <Subtitle>My Online Resume</Subtitle>
        </HeaderParent>
    );
}