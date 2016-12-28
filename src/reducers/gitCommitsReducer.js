import _ from 'lodash'

const gitCommits = (state = [], action) => {
  switch (action.type) {
    case 'GITHUB_COMMITS_FETCHED':
      return _.map(action.commits, (commit) => {
        return {
          sha: commit.sha,
          message: commit.commit.message,
          author: commit.commit.author.name,
          date: commit.commit.author.date
        }
      })

    default:
      return state;
  }
}

export default gitCommits
