export default `
import React from'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    window.console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

class MyWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: 10};
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const {time} = this.state;
      if(time < 1) {
        window.clearInterval(this.timer);
        throw new Error('The world of React exploded!');
      }
      this.setState({time: time - 1});
    }, 1000)
  }

  componentWillUnmount() {
    if(this.timer) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }

  render() {
    return <div>{this.state.time}秒后，发生异常</div>
  }
}

export default class extends React.Component {
  render() {
    return <ErrorBoundary><MyWidget></MyWidget></ErrorBoundary>
  }
}
`;