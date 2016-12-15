import { combineReducers } from 'redux'
import gitCommits from './gitCommits'

const gitrospective = combineReducers({
  gitCommits
})

export default gitrospective
