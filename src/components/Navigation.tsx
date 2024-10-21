
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavMenu=styled.ul`
    background-color: #e07a5f;
    width: 30vw;
    height: auto;
    min-height: 100vh; 
    padding: 1% 1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    @media screen and (max-width : 750px) {
        width: 100vw;
        height: auto;
        min-height: 10vh;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;

const NavButton=styled.li`
    background-color: #f4f1de;
    border: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4% 2%;
    margin: 8% 8%;
    height: 30%;
    text-align: center;

    @media screen and (max-width : 750px) {
        margin: 2% 1%;
        padding: 2% 2%;
    }
`;

const NavLink=styled(Link)`
    color:#3d405b;
    font-family: "League Gothic", sans-serif;
    font-weight: 400;
    font-variation-settings: "wdth" 100;
    font-size: calc(3.5vw + 2px);
    text-decoration: none;
`;

export default function Navigation(){
    return (
        <nav>     
            <NavMenu>
                <NavButton>
                    <NavLink to = "/">Home</NavLink>
                </NavButton>
                <NavButton>
                    <NavLink to = "/Education">Education</NavLink>
                </NavButton>
                <NavButton>
                    <NavLink to = "/Experiences">Experiences</NavLink>
                </NavButton>
                <NavButton>
                    <NavLink to = "/Leadership">Leadership</NavLink>
                </NavButton>
                <NavButton>
                    <NavLink to = "/References">References</NavLink>
                </NavButton>
                <NavButton>
                    <NavLink to = "/Projects">Projects</NavLink>
                </NavButton>
            </NavMenu>
         </nav>
    );
}