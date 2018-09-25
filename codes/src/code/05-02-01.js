export default `
class extends React.Component {
  componentDidMount() {
    document.querySelector(".button").addEventListener("click", () => {
      this.onDomClick();
    });
  }
  onDomClick() {
    console.log("Javascript Dom click");
  }
  onReactClick() {
    console.log("React click");
  }
  render() {
    return (
      <div>
        <button className="button" onClick={() => this.onReactClick()}>
          点击
        </button>
      </div>
    );
  }
}
`;