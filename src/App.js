import React, { Component } from 'react';
import './App.css';
import ChannelSection from "./components/channels/ChannelSection";
import UserSection from './components/users/UserSection';
import MessageSection from './components/messages/MessageSection';
import Socket from './socket';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      activeChannel: {},
      users: [],
      messages: [],
      connected: false,
    }
  }

  componentDidMount = () => {
    const socket = this.socket = new Socket();
    socket.on('connect', this.onConnect);
    socket.on('disconnect', this.onDisconnect);
    socket.on('channel add', this.onAddChannel);
    socket.on('user add', this.onAddUser);
    socket.on('user edit', this.onEditUser);
    socket.on('user remove', this.onRemoveUser);
    socket.on('message add', this.onMessageAdd);
  }
  
  onMessageAdd = message => {
    const messages = [...this.state.messages, message];
    this.setState({ messages });
  }

  onAddChannel = channel => {
    const channels = [...this.state.channels, channel];
    this.setState({ channels });
  }

  onRemoveUser = removeUser => {
    let { users } = this.state;
    users = users.filter(user => {
      return user.id !== removeUser.id;
    });
    this.setState({ users });
  }

  onAddUser = userList => {
    const users = [...this.state.users, userList];
    this.setState({ users: userList });
  }

  onEditUser = editUser => {
    let { users } = this.state;
    users = users.map(user => {
      if(editUser.id === user.id) {
        return editUser;
      }
      return user;
    })
  }

  onConnect = () => {
    this.setState({ connected: true });
    this.socket.emit('channel subscribe');
    this.socket.emit('user subscribe');
  }

  onDisconnect = () => {
    this.setState({ connected: false });
  }

  addChannel = name => {
    this.socket.emit('chanel add', { name });
  }

  setChannel = activeChannel => {
    this.setState({ activeChannel });
    this.socket.emit('message unsubscribe');
    this.setState({ messages: [] });
    this.socket.emit('message subscribe', { channelId: activeChannel.id })
  }

  setUserName = name => {
    this.socket.emit('user edit', { name });
  }

  addMessage = body => {
    let { activeChannel } = this.state;
    this.socket.emit('message add', { channelId: activeChannel.id, body });
  }

  render() {
    return (
      <div className='container'>
        <div className='status-bar'>
          <b>Status:</b> {this.state.connected ? 'Online' : 'Offline'}
        </div>
        <div className='app'>
          <div className='nav'>
            <ChannelSection
              {...this.state}
              addChannel={this.addChannel}
              setChannel={this.setChannel}
              />
            <UserSection
              {...this.state}
              setUserName={this.setUserName}
              />
          </div>
          <MessageSection 
            {...this.state}
            addMessage={this.addMessage}
          />
        </div>
      </div>
    );
  }
}

export default App;