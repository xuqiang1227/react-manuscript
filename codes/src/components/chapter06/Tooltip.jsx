import React from 'react';
import Modal from 'antd/lib/modal'

export default class extends React.PureComponent {

  render() {
    return (
      <div>
        页面的其他内容
        <p />
      <Dialog>
        <button>弹出一个对话框</button>
      </Dialog>
      </div>
    );
  }
}

class Dialog extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.close = this.close.bind(this);
  }

  close(e) {
    e.stopPropagation();
    this.setState({ visible: false });
  }

  render() {
    return (
      <div onClick={() => this.setState({ visible: true })}>
        {this.props.children}
        <Modal visible={this.state.visible} onCancel={this.close} onOk={this.close}>
          <div>
            this is a dialog
          </div>
        </Modal>
      </div>
    );
  }
}