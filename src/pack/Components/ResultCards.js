import React from "react"
import { Row } from "reactstrap"
import ResultCardsCard from './ResultCardsCard'

const ResultCards = ({accounts}) => {
    const renderAccounts = accounts.map((a) => <ResultCardsCard
        key={a.phoneNr}
        phoneNr={a.phoneNr}
        displayName={a.displayName}
        photoUrl={a.photoUrl}
        lastSeen={a.lastSeen}
        statusTxt={a.statusTxt}/>)

    return (
        <Row>{renderAccounts}</Row>
    )
}

export default ResultCards
