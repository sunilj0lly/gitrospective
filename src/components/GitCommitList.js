import React, { PropTypes } from 'react'

const GitCommitList = ({ commits, onLoadClick }) => (
  <section>
    <p>
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
