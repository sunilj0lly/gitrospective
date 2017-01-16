import { expectSaga } from 'redux-saga-test-plan'
import { fetchGithubRepos } from '../githubSaga'
import { githubReposListFetched } from './../../actions/actions'

const repos = [
  {
    name: 'first repos',
    htmlUrl: 'url1'
  },
  {
    name: 'second repos',
    htmlUrl: 'url2'
  }
];

function GitHubApiMock(init) {
  return {
    getUser: () => {
      return {
        listRepos: () => {
          return {
            data: repos
          }
        }
      }
    }
  }
}

jest.mock('github-api', () => {
  return GitHubApiMock;
});

it('puts an ADD action', () => {

  return expectSaga(fetchGithubRepos)
    .withState({
      user: {
        token: '1234abcd'
      }
    })
    .put(githubReposListFetched(repos))
    .dispatch({ type: 'FETCH_GITHUB_REPOS_LIST' })
    .run();

});
