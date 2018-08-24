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
        <input defaultValue={name} name="name" />
        <div>Holle, {name}!</div>
      </div>
    );
  }
}