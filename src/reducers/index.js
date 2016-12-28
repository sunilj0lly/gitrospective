import { combineReducers } from 'redux'
import gitCommits from './gitCommitsReducer'
import gitRepos from './gitReposReducer'
import user from './userReducer'

const gitrospective = combineReducers({
  gitCommits,
  gitRepos,
  user
})

export default gitrospective
