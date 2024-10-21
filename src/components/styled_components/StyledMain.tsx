import styled from "styled-components";

const StyledMain = styled.main`
    width: 70vw;
    height: auto;
    min-height: 100vh;
    padding-top: 4vh;
    background-color: #f4f1de;


    @media screen and (max-width : 750px) {
        width: 100vw;
    }
`;

export {StyledMain};