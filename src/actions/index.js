// TODO: add and export your own actions
export function setMessages(channel) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const promise = fetch(url )
    .then(response => response.json())
    .then(data => data.messages);
  return {
    type: 'SET_MESSAGES',
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const body = { channel, author, content };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());
  return {
    type: 'CREATE_MESSAGE',
    payload: promise
  };
}


export function setChannel(channel) {
  return {
    type: 'SET_CHANNEL',
    payload: channel
  };
}
