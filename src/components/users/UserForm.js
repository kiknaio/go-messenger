import React, { Component } from 'react'
import PropTypes from 'prop-types';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    }
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.setUserName(this.state.username);
    this.setState({ username: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <input 
            type='text' 
            className='form-control' 
            placeholder='Set Your Name...' 
            value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })}
            />
        </div>
      </form>
    )
  }
}

UserForm.propTypes = {
  setUserName: PropTypes.func.isRequired,

}

export default UserForm;