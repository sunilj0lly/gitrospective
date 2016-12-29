import { connect } from 'react-redux'
import GitReposList from '../components/GitReposList'
import { fetchGithubReposList, fetchCommitList } from '../actions/actions'

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
      dispatch(fetchGithubReposList());
    },
    onReposClick: (e, repos) => {
      e.preventDefault();
      dispatch(fetchCommitList(repos));
    }
  }
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(GitReposList)

export default Container
