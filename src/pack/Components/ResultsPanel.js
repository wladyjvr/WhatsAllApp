import React, {Component} from 'react'
import L from '../utils/Log'
import {Card, CardHeader, CardBody, ButtonGroup, Button, Alert} from 'reactstrap'
import moment from 'moment'
import JSZip from 'jszip'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFileArchive, faList, faInfo, faTable, faToggleOn, faToggleOff} from "@fortawesome/free-solid-svg-icons"
import FileSaveAs from '../utils/Filesaver'
import ZipFileFromUrl from '../utils/ZipFileFromUrl'
import ResultTable from './ResultTable'
import ResultCards from './ResultCards'



const Toolbar = ({onChangeDisplayMode, displayMode, onToggleShowNonAccounts, onlyShowValidAccounts,
                 onSaveToZip}) => {

    return (<div className="text-center">
        <ButtonGroup className="mr-2">
            <Button active={displayMode === 'table'} outline color="primary" title="Show results as a table"
                    onClick={() => {
                        onChangeDisplayMode('table')
                    }}><FontAwesomeIcon
                icon={faList}/></Button>
            <Button active={displayMode === 'cards'} outline color="primary" title="Show results as cards"
                    onClick={() => {
                        onChangeDisplayMode('cards')
                    }}><FontAwesomeIcon icon={faTable}/></Button>
        </ButtonGroup>

        <ButtonGroup className="mr-2">
            <Button outline color="primary" onClick={onToggleShowNonAccounts} title="Toggle showing numbers without having a WhatsApp account"><FontAwesomeIcon
                icon={onlyShowValidAccounts ? faToggleOn : faToggleOff}/>{' '}{onlyShowValidAccounts ? 'Show non valid accounts' : 'Hide non valid accounts'}</Button>
        </ButtonGroup>

        <ButtonGroup>
            <Button outline color="primary"  onClick={onSaveToZip} title="Download valid accounts to .zip file"><FontAwesomeIcon
                icon={faFileArchive}/></Button>
        </ButtonGroup>
    </div>)
}

class ResultsPanel extends Component {

    constructor(props) {
        super(props)

        const localStorage_displayMode = localStorage.getItem('ResultsPanel_displayMode')
        this.state = {
            displayMode: localStorage_displayMode ? localStorage_displayMode : 'cards',
            onlyShowValidAccounts: false
        }

        this.onChangeDisplayMode = this.onChangeDisplayMode.bind(this)
        this.onToggleShowNonAccounts = this.onToggleShowNonAccounts.bind(this)
        this.onSaveToZip = this.onSaveToZip.bind(this)
    }

    onChangeDisplayMode(mode) {
        this.setState({
            displayMode: mode
        })
        localStorage.setItem('ResultsPanel_displayMode', mode)
    }

    onToggleShowNonAccounts() {
        this.setState((prevState) => { return {
            onlyShowValidAccounts: !prevState.onlyShowValidAccounts
        }})

    }

    onSaveToZip() {
        L('Creating zip')
        const zip = new JSZip()
        let accounts = this.props.accounts.filter((a) => a.photoUrl !== null && a.photoUrl !== undefined)
        let csv = 'Phone_nr;name;status;last_seen\n'
        let nrOfImgFetchFinished = 0
        let nrOfAccounts = accounts.length
        for (let i=0; i<nrOfAccounts ;i++) {
            const account = accounts[i]
            if (account.photoUrl) {
                ZipFileFromUrl(zip, account.phoneNr + '.jpg', account.photoUrl, null, () => {
                    nrOfImgFetchFinished++;
                    if (nrOfImgFetchFinished === nrOfAccounts) {
                        zip.file('db.csv', csv);
                        L('Saving to zip')
                        zip.generateAsync({type:"blob"})
                            .then(function(content) {
                                FileSaveAs(content, "whats_all_app.zip");
                            });
                    }
                }, {xhrtype:"blob"})

                const phoneNr = account.phoneNr
                const displayName = account.displayName ? account.displayName : ''
                const statusTxt = account.statusTxt ? account.statusTxt : ''
                const lastSeenM = moment(account.lastSeen)
                const lastSeen = moment() - lastSeenM < 604800000 ? <span>{lastSeenM.format('DD-MM-YYYY HH:mm')}{' '}<span
                    className="small">{'(' + lastSeenM.fromNow() + ')'}</span></span> : 'Never'

                csv += `${phoneNr};${displayName};${statusTxt};${lastSeen}\n`

            }



        }

    }

    render() {
        const accounts = this.state.onlyShowValidAccounts ? this.props.accounts.filter((a) => a.photoUrl !== null) :
            this.props.accounts

        return (
            <div>

                <Card>
                    <CardHeader><FontAwesomeIcon icon={faInfo}/>{` Showing ${accounts.length} phone numbers`}</CardHeader>
                    <CardBody>

                        {this.props.accounts.length > 25 && <Alert color="warning">
                            You have selected more than 25 numbers, this will eventually trigger the WhatsApp rate limiter
                        </Alert>}
                        <Toolbar
                            onChangeDisplayMode={this.onChangeDisplayMode}
                            displayMode={this.state.displayMode}
                            onToggleShowNonAccounts={this.onToggleShowNonAccounts}
                            onlyShowValidAccounts={this.state.onlyShowValidAccounts}
                            onSaveToZip={this.onSaveToZip}
                        />
                        <div className="mb-4"/>
                        {this.state.displayMode === 'table' && <ResultTable accounts={accounts}/>}
                        {this.state.displayMode === 'cards' && <ResultCards accounts={accounts}/>}

                    </CardBody>
                </Card>
            </div>

        )
    }
}

export default ResultsPanel