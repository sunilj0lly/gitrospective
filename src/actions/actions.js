import { createAction } from 'redux-actions';

export const fetchGithubAuth = createAction('FETCH_GITHUB_AUTH', code => code);
export const fetchGithubReposList = createAction('FETCH_GITHUB_REPOS_LIST');
export const fetchCommitList = createAction('FETCH_COMMIT_LIST');

export const githubReposListFetched = createAction('GITHUB_REPOS_LIST_FETCHED', data => data);
export const githubCommitsFetched = createAction('GITHUB_COMMITS_FETCHED', data => data);

export const storeOAuthToken = createAction('STORE_OAUTH_TOKEN', token => token);
