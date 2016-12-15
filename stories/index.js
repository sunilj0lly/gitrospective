import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import GitCommitList from '../src/components/GitCommitList'

storiesOf('GitCommitList', module)
  .add('when no commits are loaded', () => (
    <GitCommitList onLoad={action('clicked')} />
  ))
  .add('with some commits', () => (
    <GitCommitList
      onLoad={action('clicked')}
      commits={[
        {
          sha: 1234,
          message: 'Here\'s a commit message',
          committer: 'Mr Busy'
        },
        {
          sha: 4567,
          message: 'In this commit I did some stuff',
          committer: 'Mr Grumpy'
        }
      ]} />
  ))
