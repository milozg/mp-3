import styled from "styled-components";
import { Route, Routes} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Home from "./mains/Home";
import Education from "./mains/Education";
import Experiences from "./mains/Experiences";
import Leadership from "./mains/Leadership";
import References from "./mains/References";
import Projects from "./mains/Projects";

const NavMainFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media screen and (max-width : 750px){
        flex-direction: column;
        align-items: center;
    }
`;

export default function Root(){
    return (
        <div>
            <Header/>
            <NavMainFlex>
                <Navigation/>
                <Routes>
                    <Route path = "/" element = {<Home/>}/>
                    <Route path = "/Education" element = {<Education/>}/>
                    <Route path = "/Experiences" element = {<Experiences/>}/>
                    <Route path = "/Leadership" element = {<Leadership/>}/>
                    <Route path = "/References" element = {<References/>}/>
                    <Route path = "/Projects" element = {<Projects/>}/>
                </Routes>
            </NavMainFlex>
            <Footer/>
        </div>
    );
}
