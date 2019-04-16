import { createAction } from 'redux-actions'
import { ADD_AMOUNT } from '../types'

export const addAmount = item => {
  return createAction(ADD_AMOUNT, () => item)
}
