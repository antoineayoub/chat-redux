import React from 'react';
import moment from 'moment';

const Message = (props) => {
  return(
    <div>

      <div className="header-msg">
        <h1> { props.message.author } <span className="time"> { moment(props.message.created_at).format('LT') }</span></h1>
      </div>
      <div className="content-container">
        <p> { props.message.content } </p>
      </div>
    </div>
  );
}

export default Message;
