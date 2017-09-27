import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from '../components/message'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions';

class MessageList extends Component {

  componentWillMount() {
    this.props.setMessages();
  }

  componentDidMount() {
    setInterval( () => {
      this.props.setMessages();
    }, 20000);
     this.scrollToBottom();
  }

  componentDidUpdate() {
     this.scrollToBottom();
  }

  scrollToBottom = () => {
    const messagesContainer = ReactDOM.findDOMNode(this.messagesContainer);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  render(){
    let cpt = 0;

    return(
      <div className="wrapperMessage">
        <div className="selectedChannel">
        # { this.props.selectedChannel }
        </div>
        <div ref={(el) => { this.messagesContainer = el; }} className="messages">
          {
            this.props.messages.map((message, index) => {
              return(
                <Message key={message.id} message={message} cpt={index} />
              )
            }
            )
          }
        </div>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages },
    dispatch
  );
}

// export default MessageList;
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

