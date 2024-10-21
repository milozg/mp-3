import { StyledMain } from "../styled_components/StyledMain";
import { StyledMainHeader } from "../styled_components/StyledMainHeader";
import { StyledList } from "../styled_components/StyledList";

export default function Experiences() {
    return (
        <StyledMain>
            <StyledMainHeader>Experiences</StyledMainHeader>
            <StyledList>
                <p>
                    <b>Rhythm 'n Wraps</b><br/>
                    <em>Front of House and Kitchen Support</em>
                </p>
                <ul>
                    <li>Interact with customers in a friendly and professional manner, 
                        handling and resolving issues</li>
                    <li>Prepare food items according to recipes and customer requests, 
                        ensuring quality and timely service</li>
                    <li>Train new employees on cash register operations, food preparation, 
                        and customer service procedures</li>
                </ul>
            </StyledList>
            <StyledList>
                <p>
                    <b>DoorDash</b><br/>
                    <em>Delivery Driver</em>
                </p>
                <ul>
                    <li>Delivered orders accurately and efficiently within specified 
                        time frames</li>
                    <li>Collaborated with restaurant staff to guarantee orders were 
                        prepared correctly and on time</li>
                    <li>Communicated with customers to confirm delivery details and 
                        address any issues or concerns</li>
                </ul>
            </StyledList>
        </StyledMain>
    );
}