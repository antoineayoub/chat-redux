export default function messagesReducer(state = null, action) {
  switch (action.type) {
    case 'SET_MESSAGES':
      return action.payload;
    case 'CREATE_MESSAGE':
      const messages = state.slice(0);
      messages.push(action.payload);
      return messages;
    case 'SET_CHANNEL':
      return [];
    default:
      return state;
  }
}
