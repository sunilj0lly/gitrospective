const auth = (state = {}, action) => {
  switch (action.type) {
    case 'STORE_OAUTH_TOKEN':
      state.token = action.token;
      state.isAuthenticated = true;
    return state;

    default:
      state.isAuthenticated = false;
    return state;
  }
}

export default auth
