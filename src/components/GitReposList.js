import React, { Component, PropTypes } from 'react'

const GITHUB_AUTH_URL = 'https://github.com/login/oauth/authorize'
                        + '?client_id=235d4ccd44c945c38aa6';

export default class GitReposList extends Component {

  render() {

    let controls;
    let signedIn;
    if (!this.props.isAuthenticated) {
      controls = <p><a href={ GITHUB_AUTH_URL }>Grant access to GitHub</a></p>
    } else {
      signedIn = <p>Signed in to GitHub</p>
      controls = <p><a href='#' onClick={(e) => this.props.onLoadClick(e)}>Load repos list</a></p>
    }

    return <section>
      <div>
        { signedIn }
        { controls }
      </div>
      <h3>Repositories</h3>
      <ul>
        { this.props.repos && this.props.repos.map(repos =>
          <li key={repos.name}>
            <a
              href="#"
              onClick={(e) => this.props.onReposClick(e, repos.name)}>{repos.name} - </a>
            <a href={repos.htmlUrl} target="_blank">(view on Github)</a>
          </li>
        )}
      </ul>
      <h3>Commits</h3>
      <ul>
        { this.props.commits && this.props.commits.map(commit =>
          <li key={commit.sha}>
            { commit.date } - { commit.author } - { commit.message }
          </li>
        )}
      </ul>
    </section>
  }

}

GitReposList.propTypes = {
  commits: PropTypes.arrayOf(PropTypes.shape({
    sha: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired),
  repos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    htmlUrl: PropTypes.string.isRequired
  }).isRequired),
  isAuthenticated: PropTypes.bool.isRequired,
  onLoadClick: PropTypes.func.isRequired,
  onReposClick: PropTypes.func.isRequired
}
