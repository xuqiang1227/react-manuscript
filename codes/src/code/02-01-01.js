export default `
import React, { PureComponent } from 'react';

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { time: '' };
    this.timer = null;
  }

  componentDidMount() {
    setInterval(() => {
      const now = new Date();
      let { time } = this.state;
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconde = now.getSeconds();
      time = \`\${\`0000\${year}\`.slice(-4)}
              -\${\`00\${month}\`.slice(-2)}
              -\${\`00\${day}\`.slice(-2)} \${\`00\${hours}\`.slice(-2)}
              :\${\`00\${minutes}\`.slice(-2)}
              :\${\`00\${seconde}\`.slice(-2)}\`
      this.setState({ time });
    }, 1000);
  }

  componentWillUnmount() {
    if(this.timer) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }

  render() {
    return (
      <div>{this.state.time}</div>
    )
  }
}
`;