import React from 'react';
import PropTypes from 'prop-types';
import ChannelList from "./ChannelList";
import ChannelForm from "./ChannelForm";

class ChannelSection extends React.Component {
  render() {
    return (
      <div className='support panel panel-primary'>
        <div className='panel-heading'>
          <b>Channels</b>
        </div>
        <div className='panel-body channels'>
          <ChannelList {...this.props} />
          <ChannelForm {...this.props} />
        </div>
      </div>
    );
  }
}

ChannelSection.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
  addChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired,
};

export default ChannelSection;