import React, { Component, PropTypes } from 'react'

const GITHUB_AUTH_URL = 'https://github.com/login/oauth/authorize'
                        + '?client_id=235d4ccd44c945c38aa6';

export default class GitCommitList extends Component {

  render() {
    return <section>
      <p>
        <a href={ GITHUB_AUTH_URL }>Grant access to GitHub</a><br />
        <a href='#' onClick={() => this.props.onLoadClick()}>Load commit history</a>
      </p>
      <ul>
        { this.props.commits && this.props.commits.map(commit =>
          <li key={commit.sha}>
            {commit.message} by {commit.committer}
            with SHA: {commit.sha}
          </li>
        )}
      </ul>
    </section>
  }

}

GitCommitList.propTypes = {
  commits: PropTypes.arrayOf(PropTypes.shape({
    sha: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    committer: PropTypes.string.isRequired
  }).isRequired),
  isAuthenticated: PropTypes.bool.isRequired,
  onLoadClick: PropTypes.func.isRequired
}
