import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {log: ''};
  }

  componentDidMount() {
    document.querySelector(".button").addEventListener("click", () => {
      this.onDomClick();
    });
  }
  onDomClick() {
    window.console.log("Javascript Dom click");
  }
  onReactClick() {
    window.console.log("React click");
  }
  render() {
    return (
      <div>
        <button className="button" onClick={() => this.onReactClick()}>
          点击
        </button>
        <div>打开console，查看运行结果！</div>
      </div>
    );
  }
}