import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannel, setMessages } from '../actions';

class ChannelList extends Component {

  handleClick = (channel) =>{
    this.props.setChannel(channel);
    this.props.setMessages(channel);
  }

  render(){
    console.log(this.props)
    return(

      <div className="channel-list">
        <h1>Le Wagon React</h1>
        <p className="currentUser"> <span className="login">&#xf111;</span> {this.props.currentUser}</p>
        <div className="margin-top">
        {

          this.props.channels.map((channel) => {
           return(
              <div className="channelLeft">
                <p key={channel} className={channel === this.props.selectedChannel ? 'active' : ''} onClick={() => this.handleClick(channel)}> # {channel} </p>
              </div>
            )
          }
          )
        }</div>
      </div>
    )
  };
}


function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setChannel, setMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);

