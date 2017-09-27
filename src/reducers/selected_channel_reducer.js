export default function selectedChannelReducer(state = null, action) {
  switch (action.type) {
    case 'SET_CHANNEL':
      return action.payload.channel
    default:
      return state;
  }
}
