import React from 'react';
import { render } from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      now: new Date().toLocaleTimeString(),
    };

    // tick sera un callback:
    // avec bind(): on s'assure que this reste défini à Clock
    // même dans un callback
    this.tick = this.tick.bind(this);

    // this.tick sera appelé en callback à setInterval()
    setInterval(this.tick, 1000);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.now}.</h2>
      </div>
    );
  }

  tick() {
    this.setState({ now: new Date().toLocaleTimeString() });
  }
}

render(<Clock />, document.getElementById('root'));
