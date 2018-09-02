import React from "react"
import moment from "moment"
import {formatNumber} from "libphonenumber-js"
import styled from "styled-components";

const ResultTableRowStyled = styled.tr`
  .picture {
      img {
        height: 50px;
        width: 50px;
      }
    
  }
`

const TableImagePlaceHolder = styled.div`
    height: 50px;
    width: 50px;
    background: #777;
`

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


const ResultTableRow = ({phoneNr, displayName, photoUrl, statusTxt, lastSeen}) => {
    let lastSeenTxt = 'Never'
    let isOnline = false
    if (lastSeen) {
        const lastSeenM = moment(lastSeen)
        isOnline = (moment() - lastSeenM) < 120000
        if (moment() - lastSeenM < 604800000) {
            lastSeenTxt = <span>{lastSeenM.format('HH:mm')}{' '}<span
                className="small">{'(' + lastSeenM.fromNow() + ')'}</span></span>
        } else {
            lastSeenTxt = 'Never'
        }
    }

    return (
        <ResultTableRowStyled className={isOnline ? 'table-success' : ''}>
            <td className="picture">
                { photoUrl ? <img src={photoUrl} alt="Profile picture"/> : <TableImagePlaceHolder/> }
            </td>
            <td className="selectable-text">
                {formatNumber(`+${phoneNr}`, 'International')}
            </td>
            <td className="selectable-text">
                {displayName ? displayName : ''}
            </td>
            <td className="selectable-text">
                {statusTxt && statusTxt !== 429 ? statusTxt : <StatusTxtPlaceHolder/>}
            </td>
            <td className="selectable-text">
                {lastSeenTxt}
            </td>
        </ResultTableRowStyled>
    )

}

export default ResultTableRow