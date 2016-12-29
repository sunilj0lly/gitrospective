import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import GitReposList from '../src/components/GitReposList'

// import '../src/index.css';
// import 'bootstrap/dist/css/bootstrap.css'

const authButtonClicked = action('authenticate with Github button clicked');
const reposLinkClicked = action('repos link clicked');

const repos = [
  {
    name: 'First respository',
    htmlUrl: 'http://www.github.com/firstrepository'
  },
  {
    name: 'Here\'s another repository',
    htmlUrl: 'http://www.github.com/anotherRepository'
  },
  {
    name: 'Last but not least repository',
    htmlUrl: 'http://www.github.com/lastRepository'
  }
];

const commits = [
  {
    sha: '1234',
    message: 'Did some stuff',
    author: 'Mr Happy',
    date: '2016-12-19T08:53:29Z'
  },
  {
    sha: '2345',
    message: 'Refactored a load of things',
    author: 'Mr Sad',
    date: '2016-12-18T08:53:29Z'
  },
  {
    sha: '3456',
    message: 'Fix a variety of bugs',
    author: 'Mr Angry',
    date: '2016-12-16T08:53:29Z'
  }
]

storiesOf('GitReposList', module)

  .add('user is not authenticated with Github', () => (
    <GitReposList
      isAuthenticated='false'
      onLoadClick={authButtonClicked}
      onReposClick={reposLinkClicked}/>
  ))

  .add('showing a list of repositories', () => (
    <GitReposList
      isAuthenticated='true'
      onLoadClick={authButtonClicked}
      onReposClick={reposLinkClicked}
      repos={repos} />
  ))

  .add('showing a list of commits', () => (
    <GitReposList
      isAuthenticated='true'
      onLoadClick={authButtonClicked}
      onReposClick={reposLinkClicked}
      repos={repos}
      commits={commits} />
  ))
