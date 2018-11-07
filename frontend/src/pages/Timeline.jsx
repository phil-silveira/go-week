import React from 'react'

import twitterLogo from '../twitter.svg'
import './Timeline.css'

export default class Timeline extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleInputChange = (e) => {
        this.setState({ newTweet: e.target.value })
    }

    handleNewTweet = (e) => {
        if (e.keyCode !== 13) return

        const content = this.state.newTweet;
        const author = localStorage.getItem('@GoTwitter')
    }

    render() {
        return (
            <div className='timeline-wrapper'>
                <img src={twitterLogo} alt="GoTwitter" />

                <form action="">
                    <textarea name="" id="" cols="30" rows="10"
                        value={this.state.newTweet}
                        onChange={this.handleInputChange}
                        onKeyDown={this.handleNewTweet}
                        placeholder='O que esta acontecendo?'
                    ></textarea>
                </form>

                {/* <ul></ul> */}
            </div>
        )
    }
}