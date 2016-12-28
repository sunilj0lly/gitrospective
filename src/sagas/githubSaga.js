import { put, select, takeLatest } from 'redux-saga/effects'
import GitHub from 'github-api';

const getToken = (state) => state.user.token

function* fetchReposList(action) {
  let token = yield select(getToken);
  let api = new GitHub({
     token: token
  });
  let user = api.getUser();
  let repos = yield user.listRepos();
  yield put({
    type: 'GITHUB_REPOS_LIST_FETCHED',
    message: repos.data
  });
}

function* fetchCommitList(action) {
  let token = yield select(getToken);
  let api = new GitHub({
     token: token
  });
  let userApi = api.getUser();
  let profile = yield userApi.getProfile();
  let reposApi = api.getRepo(profile.data.login, action.repos);
  let commits = yield reposApi.listCommits();
  yield put({
    type: 'GITHUB_COMMITS_FETCHED',
    commits: commits.data
  })
}

export function* fetchGithubRepos() {
  yield takeLatest('FETCH_GITHUB_REPOS_LIST', fetchReposList);
}

export function* fetchGithubCommitList() {
  yield takeLatest('FETCH_COMMIT_LIST', fetchCommitList);
}
