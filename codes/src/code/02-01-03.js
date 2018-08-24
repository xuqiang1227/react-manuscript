export default `
import React, {PureComponent} from 'react';

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {name: 'world'};
  }

  render() {
    const {name} = this.state;
    return (
      <div>
        <input value={name} onChange={e => this.setState({name: e.target.value})} />
        <div>Holle, {name}!</div>
      </div>
    );
  }
}
`;