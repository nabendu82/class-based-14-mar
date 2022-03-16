import React, { Component } from 'react'

class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    async componentDidMount(){
        const url = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ users: data });
    }

    render() {
        const { users } = this.state;

        return (
            <>
                <h1>User List</h1>
                {users && users.length && users.map(user => <h3 key={user.id}>{user.name}</h3>)}
            </>
        )
    }
}

export default UserList
