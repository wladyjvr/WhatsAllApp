import React from "react"
import moment from "moment"
import { Col, Card, CardImg, CardBody, CardTitle} from "reactstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faClock, faComment, faPhone} from "@fortawesome/free-solid-svg-icons"
import {formatNumber} from "libphonenumber-js"
import styled from "styled-components";

const StatusTxtPlaceHolder = styled.div.attrs({
    title: 'Status text is not available yet'
})`
    width: 50%;
    height: 1rem;
    background: #777;
    display: inline-block;
    border-radius: 0.25rem;
    cursor: help;
`

const ImagePlaceHolder = styled.div.attrs({
    title: 'Waiting for profile picture'
})`
    height: 250px;
    width: 100%;
    background: #777;
`

const ResultCardsCard = ({phoneNr, displayName, photoUrl, statusTxt, lastSeen}) => {
    let lastSeenTxt = 'Never'
    let isOnline = false
    if (lastSeen) {
        const lastSeenM = moment(lastSeen)
        isOnline = (moment() - lastSeenM) < 120000
        if (moment() - lastSeenM < 604800000) {
            lastSeenTxt = <span>{lastSeenM.format('HH:mm')}{' '}<span className="small">{'(' + lastSeenM.fromNow() + ')'}</span></span>
        } else {
            lastSeenTxt = 'Never'
        }

    }

    return (
        <Col sm="3">
            <Card className="mb-3" inverse={isOnline} color={isOnline ? 'success' : ''}>
                { photoUrl ? <CardImg width="100%"
                                      src={photoUrl}
                                      alt="Profile picture"/> : <ImagePlaceHolder/>
                }
                <CardBody>
                    <CardTitle className="selectable-text copyable-text">{displayName}</CardTitle>
                    <ul>
                        <li title="Phone number"  className="selectable-text"><FontAwesomeIcon fixedWidth icon={faPhone}/>{' '}{formatNumber(`+${phoneNr}`, 'International')}</li>
                        <li title="Status text" className="selectable-text"><FontAwesomeIcon fixedWidth icon={faComment}/>{' '}{statusTxt ? statusTxt : <StatusTxtPlaceHolder/>}</li>
                        <li title="Last seen" className="selectable-text"><FontAwesomeIcon fixedWidth
                                                               icon={faClock}/>{' '}{lastSeenTxt}</li>
                    </ul>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ResultCardsCard