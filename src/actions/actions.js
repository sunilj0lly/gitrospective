export const getAllCommits = () => {
  return {
    type: 'GET_ALL_COMMITS'
  }
}

export const storeOAuthToken = (token) => {
  return {
    type: 'STORE_OAUTH_TOKEN',
    token
  }
}
