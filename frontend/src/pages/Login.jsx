import React from 'react'

import twitterLogo from '../twitter.svg'
import './Login.css'

export default class Login extends React.Component {
    state = {
        username: ''
    }

    handleInputChange = (e) => {
        this.setState({ username: e.target.value })
    }

    handleSumbit = (e) => {
        e.preventDefault()

        const { username } = this.state

        if (!username) return

        localStorage.setItem('@GoTwitter', username)

        this.props.history.push('/timeline')
    }

    render() {
        return (
            <div className='login-wrapper'>
                <img src={twitterLogo} alt="GoTwitter" />
                <form onSubmit={this.handleSumbit}>
                    <input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        placeholder='Nome de Usuário' />
                    <button type='submit'>Entrar</button>
                </form>
            </div>
        )
    }
}