import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Channel from "./Channel";

class ChannelList extends Component {
  render() {
    const { channels, setChannel, activeChannel, } = this.props;
    return (
      <ul>
        {channels.map(channel =>  
          <Channel 
            key={channel.id} 
            channel={channel} 
            {...this.props}
            />)}
      </ul>
    )
  }
}

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired,
};

export default ChannelList;