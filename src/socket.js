import { EventEmitter } from 'events';

class Socket {
  constructor(ws = new WebSocket('ws://echo.websocket.org'), ee = new EventEmitter()) {
    this.ws = ws;
    this.ee = ee;

    ws.onmessage = this.message;
    ws.onopen = this.open;
    ws.onclose = this.close;
  }

  on = (name, fn) => {
    this.ee.on(name, fn);
  }

  off = (name, fn) => {
    this.ee.removeListener(name, fn);
  }

  emit = (name, data) => {
    const message = JSON.stringify({name, data});
    this.ws.send(message);
  }

  message = e => {
    try {
      const event = JSON.parse(e.data);
      this.ee.emit(this.message.name, this.message.data);
    } catch(err) {
      this.ee.emit('error', err);
    }
  }

  open = e => {
    this.ee.emit('connect');
  }

  close = e => {
    this.ee.emit('disconnect');
  }
}

export default Socket;