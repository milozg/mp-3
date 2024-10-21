import styled from "styled-components";
import { StyledMain } from "../styled_components/StyledMain";
import { StyledMainHeader } from "../styled_components/StyledMainHeader";
import profile from "../../profile.jpeg"

 const FlexMain = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
 `;

 const StyledImg = styled.img`
    width: 40%;
    height: 60%;
    margin: 10% auto;
    align-content: center;
 `;

 const Intro1 = styled.p`
    width: 40%;
    height: 60%;
    margin: 10% auto;
    font-size: calc(2vw + 3px);
    font-family: "PT Serif", serif;
    font-weight: 400;
    align-content: center;
 `;

 const Intro2 = styled.p`
    text-align: center;
    font-size: calc(2vw + 3px);
    font-family: "PT Serif", serif;
    font-weight: 400;
    margin: 2% 5%;
 `;

 export default function Home() {
    return (
        <StyledMain>
            <StyledMainHeader>Home</StyledMainHeader>
            <FlexMain>
                <StyledImg src = {profile}/>
                <Intro1>
                    My name is Milo Zurn-Galinsky. I am a senior studying at Boston University graduating with a Bachelors in Computer Science.
                    I am eager to use my strong academic background to gain further hands-on experience in the field. I have a strong work
                    ethic and problem solving skills. I wish to pursue opportunities where I can continuously learn and make a meaningful impact.
                </Intro1>
            </FlexMain>
            <Intro2>Please explore my online resume if you are interested in learning more about me.</Intro2>
        </StyledMain>
    );
 }