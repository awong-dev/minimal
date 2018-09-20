import React from 'react'

window.seconds = window.seconds || 0;

class LowResClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: window.seconds };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
        window.seconds = window.seconds + 1;
        this.setState({ seconds: window.seconds });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="clock">
       <p>
       Don't worry Palmer. This webclock is low resolution.
       </p>
       {this.state.seconds} mins
      </div>
    );
  }
}

export default LowResClock;
