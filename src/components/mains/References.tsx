import styled from "styled-components";
import { StyledMain } from "../styled_components/StyledMain";
import { StyledMainHeader } from "../styled_components/StyledMainHeader";

const TableFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TableDiv = styled.div`
    margin-top: 5vh;
    margin-bottom: 0.5vh;
    font-size: calc(2vw + 3px);
    font-family: "PT Serif", serif;
    font-weight: 400;
`;

const RefType = styled.h3`
    text-align: center;
    margin-bottom: 2vh;
`;

const RefTable = styled.table`
    border-collapse: collapse;
`;

const TopRow = styled.tr`
    font-weight: bold;
`;

const TableItem = styled.td`
    border: 0.5vw solid #3d405b;
    padding: 1vh 1vw;
`;

export default function References() {
    return (
        <StyledMain>
            <StyledMainHeader>References</StyledMainHeader>
            <TableFlex>

                <TableDiv>
                    <RefType>Professional</RefType>
                        <RefTable>
                            <TopRow>
                                <TableItem>Name</TableItem>
                                <TableItem>Position</TableItem>
                                <TableItem>Contact</TableItem>
                            </TopRow>
                            <tr>
                                <TableItem>Aaron Cohen</TableItem>
                                <TableItem>Boss</TableItem>
                                <TableItem>(617) 658-3916</TableItem>
                            </tr>
                            <tr>
                                <TableItem>Shawn Xu</TableItem>
                                <TableItem>Colleague</TableItem>
                                <TableItem>(857) 210-8552</TableItem>
                            </tr>
                        </RefTable>
                </TableDiv>

                <TableDiv>
                    <RefType>Personal</RefType>
                        <RefTable>
                            <TopRow>
                                <TableItem>Name</TableItem>
                                <TableItem>Relation</TableItem>
                                <TableItem>Contact</TableItem>
                            </TopRow>
                            <tr>
                                <TableItem>Amelie Zurn-Galinsky</TableItem>
                                <TableItem>Mother</TableItem>
                                <TableItem>(301) 641-3401</TableItem>
                            </tr>
                            <tr>
                                <TableItem>Hilario Gonzalez</TableItem>
                                <TableItem>Friend</TableItem>
                                <TableItem>(971) 201-5801</TableItem>
                            </tr>
                        </RefTable>
                </TableDiv>

            </TableFlex>
        </StyledMain>
    );
}