import React from 'react'
import './Post.css'
import styled from 'styled-components'

const paraStyled = {
    color: 'red',
    fontWeight: 'bold'
}

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const Post = ({ post }) => {
    return (
        <div className='container'>
            <h1 style={{ color: 'darkblue'}}>{post.title}</h1>
            <p style={paraStyled}>{post.body}</p>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </div>
    )
}

export default Post