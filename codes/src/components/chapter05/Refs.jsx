import React from 'react';

export default class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    if(this.myRef) {
      this.myRef.current.focus();
    }
  }

  render() {
    return (
      <div>
        <input defaultValue="no focus"/>
        <p/>
        <input ref={this.myRef} defaultValue="has focus"/>
      </div>
    );
  }
}