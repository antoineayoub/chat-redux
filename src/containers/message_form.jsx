import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {content: ''};
  }

  componentDidMount() {
    this.messageBox.focus();
  }
  handleChange = (event) => {
    this.setState({content: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser,  this.state.content)
    this.setState({ content: '' });
  }

  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit} className="msg-form">
        <input ref={input => this.messageBox = input} type="text" autoComplete="off" name="name" value={this.state.content} onChange={this.handleChange} className="msg-input" placeholder={`   Message #${this.props.selectedChannel}`} />
        <input type="submit" value="&#xf1d9;" className="fa-input btn-submit" />
      </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage },
    dispatch
  );
}

// export default MessageList;
export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
