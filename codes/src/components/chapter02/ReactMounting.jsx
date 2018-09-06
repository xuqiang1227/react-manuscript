import React from 'react';

const ParentComponent = class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { color: undefined };
  }


  render() {
    return (
      <div>
        <button onClick={() => this.setState({ color: 'red' })}>红色</button>
        |
        <button onClick={() => this.setState({ color: 'blue' })}>蓝色</button>
        |
        <button onClick={() => this.setState({ color: 'green' })}>绿色</button>
        <ChildrenComponent color={this.state.color} />
      </div>
    )
  }
}

class ChildrenComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { color: undefined };
  }

  componentDidMount() {
    this.setState({color: 'black'});
  }

  static getDerivedStateFromProps(props, state) {
    if (props.color && props.color !== state.color) {
      return { color: props.color };
    }
  }

  render() {

    const styles = {
      width: 200,
      height: 100,
      border: '1px solid #ff00ff',
      padding: 20,
      marginTop: 50,
      display: 'flex'
    };

    return (
      <div style={styles}>
        <lable>子组件</lable>： <div style={{ width: 30, height: 30, backgroundColor: this.state.color }}></div>
      </div>
    );
  }
}

export default ParentComponent;