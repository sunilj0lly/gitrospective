import { combineReducers } from 'redux'
import gitCommits from './gitCommits'
import user from './user'

const gitrospective = combineReducers({
  gitCommits,
  user
})

export default gitrospective
