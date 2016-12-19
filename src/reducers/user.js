const auth = (state = {}, action) => {
  switch (action.type) {
    case 'STORE_OAUTH_TOKEN':
      state.token = action.token;
    return state;

    default:
      return state
  }
}

export default auth
