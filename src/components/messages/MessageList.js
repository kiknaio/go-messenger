import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Message from './Message';

class MessageList extends Component {
  render() {
    const { messages } = this.props;
    return (
      <ul>
        {messages.map(msg => <Message key={msg.id} message={msg} />)}
      </ul>
    )
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
}

export default MessageList;