import { connect } from 'react-redux'
import GitCommitList from '../components/GitCommitList'

const mapStateToProps = (state) => {
  return {
    commits: state.gitCommits,
    isAuthenticated: state.user.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadClick: (e) => {
      e.preventDefault();
      dispatch({ type: 'FETCH_GIT_HUB_COMMIT_LIST' });
    }
  }
}

const GitCommits = connect(
  mapStateToProps,
  mapDispatchToProps
)(GitCommitList)

export default GitCommits
