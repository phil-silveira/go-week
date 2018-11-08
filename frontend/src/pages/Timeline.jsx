import React from 'react'
import socket from 'socket.io-client'

import api from '../services/api'

import Tweet from '../components/Tweet'

import twitterLogo from '../twitter.svg'
import './Timeline.css'

export default class Timeline extends React.Component {
    state = {
        newTweet: '',
        tweets: []
    }

    handleInputChange = (e) => {
        this.setState({ newTweet: e.target.value })
    }

    handleNewTweet = async (e) => {
        if (e.keyCode !== 13) return

        const content = this.state.newTweet;
        const author = localStorage.getItem('@GoTwitter')

        await api.post('/tweets', { author, content })

        this.setState({ newTweet: '' })
    }

    subscribeToEvents = () => {
        const io = socket('http://localhost:3000')

        io.on('tweet', data => {
            console.log(data)

            this.setState({ tweets: [data, ...this.state.tweets] })
        })
        io.on('like', data => {
            this.setState({
                tweets: this.state.tweets.map(tweet => {
                    return tweet._id === data._id ? data : tweet
                })
            })

            console.log(data)
        })
    }

    async componentDidMount() {
        this.subscribeToEvents()

        const response = await api.get('/tweets')

        this.setState({ tweets: response.data })
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
                <ul className='tweet-list'>
                    {this.state.tweets.map(tweet => {
                        return <Tweet key={tweet._id} tweet={tweet} />
                    })}
                </ul>
            </div>
        )
    }
}