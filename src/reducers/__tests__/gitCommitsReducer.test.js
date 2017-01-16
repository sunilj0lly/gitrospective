import gitCommits from '../gitCommitsReducer'

it('should return key commit information', () => {
  let result = gitCommits([], {
    type: 'GITHUB_COMMITS_FETCHED',
    payload: [{
      sha: '1234',
      commit: {
        message: 'First message',
        author: {
          name: 'First name',
          date: 'First date'
        }
      }
    },
    {
      sha: '3456',
      commit: {
        message: 'Second message',
        author: {
          name: 'Second name',
          date: 'Second date'
        }
      }
    }]
  });
  

  expect(result).toEqual([
    {
      'author': 'First name',
      'date': 'First date',
      'message': 'First message',
      'sha': '1234'
    },
    {
      'author': 'Second name',
      'date': 'Second date',
      'message': 'Second message',
      'sha': '3456'
    }]);
})
