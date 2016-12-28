import { delay } from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects'

function* fetchList(action) {
  console.log('delay it!');
  yield delay(1000)
  console.log('return it!');
  yield put({ type: 'I fetched the git list!' })
}

export default function* fetchGitHubCommitList() {
  yield takeLatest('FETCH_GIT_HUB_COMMIT_LIST', fetchList);
}
