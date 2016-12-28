import { combineReducers } from 'redux'
import gitCommits from './gitCommitsReducer'
import user from './userReducer'

const gitrospective = combineReducers({
  gitCommits,
  user
})

export default gitrospective
