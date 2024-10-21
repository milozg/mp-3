import { StyledMain } from "../styled_components/StyledMain";
import { StyledMainHeader } from "../styled_components/StyledMainHeader";
import { StyledList } from "../styled_components/StyledList";

export default function Education() {
    return (
        <StyledMain>
            <StyledMainHeader>Educational Background</StyledMainHeader>
            <StyledList>
                <p>
                    <b>Boston University - College of Arts and Sciences</b><br/>
                    <em>Bachelor of Arts in Computer Science</em>
                </p>
                <ul>
                    <li><b>Cumulative GPA:</b> 3.98/4.00, SAT: 1470</li>
                    <li><b>Activities:</b> BU Ski and Board Club</li>
                </ul>
            </StyledList>
            <StyledList>
                <p>
                    <b>Wesleyan University</b><br/>
                    <em>Bachelor of Arts in Computer Science</em>
                </p>
                <ul>
                    <li><b>Cumulative GPA:</b> 3.58/4.00, SAT: 1470</li>
                </ul>
            </StyledList>
        </StyledMain>
    );
}