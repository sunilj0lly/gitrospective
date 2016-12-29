import { put, select, takeLatest } from 'redux-saga/effects'
import GitHub from 'github-api';

import { getJSON } from './../utils'
import { githubReposListFetched,
          githubCommitsFetched,
          storeOAuthToken } from './../actions/actions'

const githubAuthUrl = 'http://localhost:9999/authenticate/';
const getToken = (state) => state.user.token

function* fetchReposList(action) {
  let token = yield select(getToken);
  let api = new GitHub({
     token: token
  });
  let user = api.getUser();
  let repos = yield user.listRepos();
  yield put(githubReposListFetched(repos.data));
}

function* fetchCommitList(action) {
  let token = yield select(getToken);
  let api = new GitHub({
     token: token
  });
  let userApi = api.getUser();
  let profile = yield userApi.getProfile();
  let reposApi = api.getRepo(profile.data.login, action.payload);
  let commits = yield reposApi.listCommits();
  yield put(githubCommitsFetched(commits.data));
}

function* fetchAuth(action) {
  let auth = yield getJSON(githubAuthUrl + action.payload);
  if (auth.error) {
    alert('Wasn\'t able to autenticate with GitHub');
    console.error(auth.error);
    return;
  }
  yield put(storeOAuthToken(auth.token));
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
