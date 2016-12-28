import React, { Component, PropTypes } from 'react'

const GITHUB_AUTH_URL = 'https://github.com/login/oauth/authorize'
                        + '?client_id=235d4ccd44c945c38aa6';

export default class GitCommitList extends Component {

  render() {

    let controls;
    let signedIn;
    if (!this.props.isAuthenticated) {
      controls = <a href={ GITHUB_AUTH_URL }>Grant access to GitHub</a>
    } else {
      signedIn = <p>Signed in to GitHub</p>
      controls = <a href='#' onClick={(e) => this.props.onLoadClick(e)}>Load commit history</a>
    }

    return <section>
      <p>
        { signedIn }
        { controls }
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
