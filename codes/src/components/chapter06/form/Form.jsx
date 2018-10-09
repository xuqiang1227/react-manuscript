import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, onSubmit } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit(this.state);
      }}>
        {
          React.Children.map(children, child => {
            return React.cloneElement(child, { name: child.props.name, onChange: e => this.setState({ [child.props.name]: e.target.value }) })
          })
        }
      </form>
    );
  }
}

export default Form;
