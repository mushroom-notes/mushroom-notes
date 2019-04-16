import { handleActions } from 'redux-actions'
import { ADD_AMOUNT } from '../types'

export default handleActions({
  [ADD_AMOUNT](state, action) {
    console.log('state==========')
    console.log(state)
    console.log(action)
    return state.concat(action.payload)
  }
}, [2])
