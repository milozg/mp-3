import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #3d405b;
    color: #f4f1de;
    padding: 1% 1%;
    font-family: "PT Serif", serif;
    font-weight: 400;
`;

const YellowCredit = styled.span`
    color: yellow;
`;

export default function Footer(){
    return (
        <StyledFooter>
            <p><b>Contact me:</b></p>
            <ul>
                <li>48 Brighton Ave, Allston MA, 02134</li>
                <li>(240)475-6972</li>
                <li>milozg@bu.edu</li>
            </ul>
            <p>All rights reserved by Milo Zurn-Galinsky <YellowCredit>Credits</YellowCredit> &#169;</p>
        </StyledFooter>
    );
}