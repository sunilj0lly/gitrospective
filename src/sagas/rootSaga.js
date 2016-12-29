import * as github from './githubSaga'

export default function* rootSaga() {
  yield [
    github.fetchGithubRepos(),
    github.fetchGithubCommitList(),
    github.fetchGithubAuth()
  ]
}
