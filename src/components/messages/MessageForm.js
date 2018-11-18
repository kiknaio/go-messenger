import React, { Component } from 'react'
import PropTypes from 'prop-types';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.addMessage(this.state.message);
    this.setState({ message: '' });
  }

  render() {
    let input;
    if(this.props.activeChannel.id !== undefined) {
      input = (
        <input
          onChange={e => this.setState({ message: e.target.value })}
          type='text'
          value={this.state.message}
          className='form-control'
          placeholder='Add Message...'
        />
      )
    }
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          {input}
        </div>
      </form>
    )
  }
}

MessageForm.propTypes = {
  activeChannel: PropTypes.object.isRequired,
  addMessage: PropTypes.func.isRequired,
}

export default MessageForm;