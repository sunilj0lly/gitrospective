import { put, select, takeLatest } from 'redux-saga/effects'
import GitHub from 'github-api';

import { getJSON } from './../utils'

const githubAuthUrl = 'http://localhost:9999/authenticate/';
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

function* fetchAuth(action) {
  try {
    let auth = yield getJSON(githubAuthUrl + action.code);
    yield put({
      type: 'STORE_OAUTH_TOKEN',
      token: auth.token
    })
  } catch (error) {
    alert('Wasn\'t able to autenticate with GitHub');
    console.error(error);
  }
}

export function* fetchGithubRepos() {
  yield takeLatest('FETCH_GITHUB_REPOS_LIST', fetchReposList);
}

export function* fetchGithubCommitList() {
  yield takeLatest('FETCH_COMMIT_LIST', fetchCommitList);
}

export function* fetchGithubAuth() {
  yield takeLatest('FETCH_GITHUB_AUTH', fetchAuth)
}
