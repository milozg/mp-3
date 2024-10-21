import { StyledMain } from "../styled_components/StyledMain";
import { StyledMainHeader } from "../styled_components/StyledMainHeader";
import { StyledList } from "../styled_components/StyledList";

export default function Leadership() {
    return (
        <StyledMain>
            <StyledMainHeader>Leadership Experiences</StyledMainHeader>
            <StyledList>
                <p>
                    <b>Ski and Board Club, Boston University</b><br/>
                    <em>Vice President</em>
                </p>
                <ul>
                    <li>Manage member inquiries and concerns, providing prompt and 
                        accurate responses</li>
                    <li>Work with board of directors to establish effective 
                        communication and execution of club initiatives</li>
                    <li>Facilitate and confirm safety of all members during 
                        ski trips and social events</li>
                </ul>
            </StyledList>
            <StyledList>
                <p>
                    <b>International Partners</b><br/>
                    <em>Delegate Representative Volunteer</em>
                </p>
                <ul>
                    <li>Aided a community in Alegria, El Salvador by performing 
                        manual labor tasks</li>
                    <li>Built positive community relationships through respectful 
                        communication and cultural awareness</li>
                    <li>Developed cross-cultural competence by immersing oneself 
                        in local customs, language, and traditions</li>
                </ul>
            </StyledList>
        </StyledMain>
    );
}