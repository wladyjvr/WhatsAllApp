import React, {Component} from 'react'
import styled from 'styled-components'
import styleBootstrap from '../assets/bootstrap/bootstrap.useable.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import MainContent from './MainContent'




const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999999;
  position: absolute;
  width: 100%;
  

`
const TopBar = styled.div`
  background-color: #F26222;
  height: 19px;
  padding: 0 5px;
  font-family: Ubuntu;
  color: white;
  font-size: 12px;
  line-height: 19px;
  width: 100%;
  padding: 0 0 0 15px;
  

`

const SlideButtonDown = styled.div`
    width: 100px;
    height: 29px;
    line-height: 29px; 
    margin-top: -19px;
    background-color: #F26222;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: white;
    text-align: center;
    transition: padding-top 0.2s;
    z-index: 99999;
    &:hover {
        padding-top: 5px;
        cursor: pointer;
    }

`

const SlideButtonUp = styled.div`
    position: fixed;
    bottom: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100px;
    height: 29px;
    background-color: #F26222;
    text-align: center;
    line-height: 29px; 
    color: white;
    transition: padding-bottom 0.2s;
    z-index: 99999;
    box-shadow: 0px 0px 7px black;
    &:hover {
        padding-bottom: 5px;
        cursor: pointer;
    }
`

class OverlayContainer extends Component {
    constructor(props) {
        super(props)

        if (process.env.NODE_ENV === 'development') {
            styleBootstrap.use()
            this.state = {
                isMainContentVisible: true,
                bootstrapRefs: 1
            }
        } else {
            this.state = {
                isMainContentVisible: false,
                bootstrapRefs: 0
            }
        }

        this.toggleMainContent = this.toggleMainContent.bind(this)
    }

    toggleMainContent() {
        this.setState((prevState) => {

            const willBeVisible = !prevState.isMainContentVisible
            let bootstrapRefs = prevState.bootstrapRefs


            if (willBeVisible) {
                styleBootstrap.use()
                bootstrapRefs += 1
            } else {
                if (bootstrapRefs > 0) {
                    setTimeout(styleBootstrap.unuse, "1500")
                    bootstrapRefs -= 1
                }

            }

            return {
                isMainContentVisible: willBeVisible,
                bootstrapRefs: bootstrapRefs
            }
        })

    }

    render() {
        const button = this.state.isMainContentVisible ?
            <SlideButtonUp onClick={this.toggleMainContent}><FontAwesomeIcon icon={faChevronUp}/></SlideButtonUp> :
            <SlideButtonDown onClick={this.toggleMainContent}><FontAwesomeIcon icon={faChevronDown}/></SlideButtonDown>

        return (
            <StyledContainer>
                <MainContent isOpen={this.state.isMainContentVisible}/>
                <TopBar>WhatsAllApp Community Editon 0.0.1</TopBar>
                {button}
            </StyledContainer>
        )
    }
}

export default OverlayContainer