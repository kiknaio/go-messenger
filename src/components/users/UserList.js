import React, { Component } from 'react'
import PropTypes from 'prop-types';
import User from './User';

class UserList extends Component {
  render() {
    const { users } = this.props;
    return (
      <ul>
        {users.map(user => (
          <User key={user.id} user={user}/>
        ))}
      </ul>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
}

export default UserList;