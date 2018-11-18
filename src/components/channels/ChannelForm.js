import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChannelForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channelName: '',
    }
  }

  onChange = ({ target: { value } }) => {
    this.setState({
      channelName: value,
    })
  }

  onSubmit = event => {
    event.preventDefault();
    const { channelName } = this.state;
    this.props.addChannel(channelName);
    this.setState({ channelName: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <input
            className='form-control'
            placeholder='Add Channel'
            type="text"
            onChange={this.onChange}
            value={this.state.channelName}
          />
        </div>
      </form>
    );
  }
}

ChannelForm.propTypes = {
  addChannel: PropTypes.func.isRequired,
}

export default ChannelForm;
