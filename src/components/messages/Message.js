import React, { Component } from 'react'
import PropTypes from 'prop-types';
import fecha from 'fecha';

class Message extends Component {
  render() {
    const { message } = this.props;
    const createdAt = fecha.format(message.createdAt, 'HH:mm:ss YY/MM/DD');

    return (
      <li>
        <div className="author">
          <strong>{message.author}</strong>
          <i className="timestamp">{createdAt}</i>
        </div>
        <div className="body">{message.body}</div>
      </li>
    )
  }
}

Message.propTypes = { 
  message: PropTypes.object.isRequired,
}

export default Message;