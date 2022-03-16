import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            comment: '',
            language: 'es'
        }
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleLangChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`Email: ${this.state.email}, Comment: ${this.state.comment}, Language: ${this.state.language}`)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="email">Email </label>
                    <input type="text" id="email" value={this.state.email} onChange={this.handleEmailChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comments </label>
                    <textarea name="comment" id="comment" onChange={this.handleCommentChange}></textarea>
                </div>
                <br />
                <div>
                    <label htmlFor="language">Language </label>
                    <select id="language" value={this.state.language} onChange={this.handleLangChange}>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                    </select>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default DemoForm
