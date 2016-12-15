import { connect } from 'react-redux'
import { getAllCommits } from '../actions'
import GitCommitList from '../components/GitCommitList'

const mapStateToProps = (state) => {
  return {
    commits: state.gitCommits
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadClick: () => {
      dispatch(getAllCommits())
    }
  }
}

const GitCommits = connect(
  mapStateToProps,
  mapDispatchToProps
)(GitCommitList)

export default GitCommits
