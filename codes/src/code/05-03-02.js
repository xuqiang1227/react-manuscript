export default `
import React, {PureComponent} from 'react';

const CustomTextInput = ({inputRef}) => {
  return <input ref={inputRef}/>
}

export default class Parent extends PureComponent {
  componentDidMount() {
    if(this.inputElement) {
      this.inputElement.focus();
    }
  }
  render() {
    return (
      <CustomTextInput
        inputRef={el => this.inputElement = el}
      />
    );
  }
}
`;