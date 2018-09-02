import React from "react"
import { Table } from "reactstrap"
import styled from 'styled-components'
import ResultTableRow from './ResultTableRow'

const StyledHeaderTR = styled.tr`
  .phoneNr {
  min-width: 13rem;
  }
  
  .displayName {
  min-width: 13rem;
  }
`

const ResultTable = ({accounts}) => {
    const renderAccounts = accounts.map((a) => <ResultTableRow
        key={a.phoneNr}
        phoneNr={a.phoneNr}
        displayName={a.displayName}
        photoUrl={a.photoUrl}
        lastSeen={a.lastSeen}
        statusTxt={a.statusTxt}/>)

    return (
        <Table>
            <thead>
            <StyledHeaderTR>
                <th className="picture">Picture</th>
                <th className="phoneNr">Phone nr.</th>
                <th className="displayName">Name</th>
                <th className="statusTxt">Status text</th>
                <th className="lastSeen">Last seen</th>
            </StyledHeaderTR>
            </thead>
            <tbody>
            {renderAccounts}
            </tbody>

        </Table>
    )

}

export default ResultTable