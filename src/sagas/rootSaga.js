import { fetchGithubRepos, fetchGithubCommitList, fetchGithubAuth } from './githubSaga'

export default function* rootSaga() {
  yield [
    fetchGithubRepos(),
    fetchGithubCommitList(),
    fetchGithubAuth()
  ]
}
