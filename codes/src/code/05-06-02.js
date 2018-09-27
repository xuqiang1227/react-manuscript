export default `
import React, { PureComponent } from 'react';

class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { a: 0, b: 0, o: '+', r: 0 };
  }

  componentDidMount() {
    const { a, b, o } = this.props;
    let r = 0;
    switch (o) {
      case '+':
        r = a + b;
        break;
      case '-':
        r = a - b;
        break;
      case '*':
        r = a * b;
        break;
      case '/':
        r = a / b;
        break;
      default:
        r = 0;
    }
    this.setState({ a, b, o, r });
  }

  render() {
    const { a, b, o, r } = this.state;
    return <h2>{\`\${a} \${o} \${b} = \${r}\`}</h2>
  }
}

const EnchanceComponent = (WrappedCompopnent) => {
  return class extends WrappedCompopnent {
    constructor(props) {
      super(props);
      this.state = { error: '' };
    }
    componentDidMount() {
      const { o } = this.props;
      if (!['+', '-', '*', '/'].some(i => i === o)) {
        this.setState({ error: 'operator is not valid' });
      } else {
        super.componentDidMount();
      }

    }
    render() {
      if (this.state.error) {
        return <div>{this.state.error}</div>;
      } else {
        return super.render();
      }
    }
  }
};

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {a: undefined, b: undefined, o: undefined}
  }
  render() {
    const Enchancer = EnchanceComponent(Calculate);
    const {a, b, o} = this.state; 
    return (
      <div>
        <input placeholder='a'
         value={a}
          onChange={e => this.setState({a: e.target.value})}
          /> <input value={o}
          onChange={e => this.setState({o: e.target.value})}/> <input placeholder='b' value={b}
          onChange={e => this.setState({b: e.target.value})}/>
        <Enchancer a={Number(a)} b={Number(b)} o={String(o)}/>
      </div>
    );
  }
}
`;