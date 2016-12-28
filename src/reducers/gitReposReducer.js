import _ from 'lodash'

const gitRepos = (state = [], action) => {
  switch (action.type) {
    case 'GITHUB_REPOS_LIST_FETCHED':
      return _.map(action.message, (item) => {
        return {
                name: item.name,
                htmlUrl: item.html_url
              }
      });

    default:
      return state
  }
}

export default gitRepos
