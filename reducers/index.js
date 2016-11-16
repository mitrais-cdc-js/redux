import { combineReducers } from 'redux'
import emps from './emp'
import empcounter from './empcounter'
import detail from './detail'

const empreducer = combineReducers({
  emps,
  empcounter,
  detail
})


export default empreducer