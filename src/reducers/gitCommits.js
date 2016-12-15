const gitCommits = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_COMMITS':
      return [{
        sha: 1234,
        message: 'This will be a commit message',
        committer: 'Firstname Lastname'
      },
      {
        sha: 5678,
        message: 'Another commit message',
        committer: 'Mr Happy'
      }]

    default:
      return state
  }
}

export default gitCommits
