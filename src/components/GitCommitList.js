import React, { PropTypes } from 'react'

const GitCommitList = ({ commits, onLoadClick }) => (
  <section>
    <p>
      <a href='https://github.com/login/oauth/authorize?client_id=235d4ccd44c945c38aa6'>Login to GitHub</a><br />
      <a href='#' onClick={() => onLoadClick()}>Load commit history</a>
    </p>
    <ul>
      { commits && commits.map(commit =>
        <li key={commit.sha}>
          {commit.message} by {commit.committer} with SHA: {commit.sha}
        </li>
      )}
    </ul>
  </section>
)

GitCommitList.propTypes = {
  commits: PropTypes.arrayOf(PropTypes.shape({
    sha: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    committer: PropTypes.string.isRequired
  }).isRequired),
  onLoadClick: PropTypes.func.isRequired
}

export default GitCommitList
