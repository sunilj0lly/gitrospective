import _ from 'lodash'

const auth = (state = {}, action) => {
  switch (action.type) {
    case 'STORE_OAUTH_TOKEN':
      return _.merge({}, state, {
        token: action.token,
        isAuthenticated: true
      });

    default:
      return _.merge({}, state, {
        isAuthenticated: false
      });
  }
}

export default auth
