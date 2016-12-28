import { connect } from 'react-redux'
import GitReposList from '../components/GitReposList'

const mapStateToProps = (state) => {
  return {
    repos: state.gitRepos,
    commits: state.gitCommits,
    isAuthenticated: state.user.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadClick: (e) => {
      e.preventDefault();
      dispatch({ type: 'FETCH_GITHUB_REPOS_LIST' });
    },
    onReposClick: (e, repos) => {
      e.preventDefault();
      dispatch({ type: 'FETCH_COMMIT_LIST', repos });
    }
  }
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(GitReposList)

export default Container
