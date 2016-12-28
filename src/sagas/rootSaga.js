import { fetchGithubRepos, fetchGithubCommitList } from './githubSaga'

export default function* rootSaga() {
  yield [
    fetchGithubRepos(),
    fetchGithubCommitList()
  ]
}
