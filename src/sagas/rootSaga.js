import gitHubSaga from './githubSaga'

export default function* rootSaga() {
  yield [
    gitHubSaga()
  ]
}
